import express from 'express';

import UsersController from './controllers/UsersController';
import RoomsController from './controllers/RoomsController';
import RoomPlayersController from './controllers/RoomPlayersController';

const routes = express.Router();

const usersController = new UsersController();
const roomsController = new RoomsController();
const roomPlayersController = new RoomPlayersController();

// routes.get('/users', usersController.index);
routes.post('/users', usersController.store);

routes.get('/rooms', roomsController.index);
routes.post('/rooms', roomsController.store);

routes.get('/room-players/:room_id', roomPlayersController.index);
routes.post('/room_players', roomPlayersController.store);

export default routes;
