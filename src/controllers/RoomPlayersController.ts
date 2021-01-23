import { Request, Response } from 'express';
// import { Socket } from 'socket.io';

import RoomPlayers from '../database/schemas/RoomPlayers';

class RoomPlayersController {
  async index(request: Request, response: Response) {
    const { room_id } = request.params;

    console.log(room_id);

    const room_players = await RoomPlayers.find({ room_id });

    console.log(room_players);

    return response.json(room_players);
  }

  async store(request: Request, response: Response) {
    const { user_id, room_id } = request.body;

    const joinedUser = await RoomPlayers.create({ user_id, room_id });

    joinedUser.save();

    return response.json({ joinedUser });
  }
}

export default RoomPlayersController;
