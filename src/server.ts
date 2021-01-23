import express, { Request, Response, NextFunction } from 'express';
import socketio from 'socket.io';
import http from 'http';

import routes from './routes';

import './database';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('we have a new connection');

  socket.on('join', ({ user, room }) => {
    console.log(user, room);

    socket.emit('message', { user, text: `welcome to the room ${room}` });
    socket.broadcast
      .to(room)
      .emit('message', { user, text: `${user} has joined` });

    socket.join(room);
  });

  socket.on('diceRoll', ({ user, room, diceType, dice }) => {
    console.log(room, dice);

    io.to(room).emit('roll', { roll: `${user} jogou um ${diceType}: ${dice}` });
  });

  socket.on('disconnect', () => {
    console.log('User had left the room!');
  });
});

app.use((request: Request, response: Response, next: NextFunction) => {
  request.io = io;

  return next();
});

app.use(express.json());
app.use(routes);

// eslint-disable-next-line no-console
server.listen(3333, () => console.log('Server started on port:3333'));
