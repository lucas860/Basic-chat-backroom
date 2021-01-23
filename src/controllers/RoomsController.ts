import { Request, Response } from 'express';

import Room from '../database/schemas/Room';

class RoomsController {
  async index(request: Request, response: Response) {
    const rooms = await Room.find();

    return response.json(rooms);
  }

  async store(request: Request, response: Response) {
    const { name } = request.body;

    const room = await Room.create({ name });

    room.save();

    return response.json({ room });
  }
}

export default RoomsController;
