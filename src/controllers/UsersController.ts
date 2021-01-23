import { Request, Response } from 'express';

import User from '../database/schemas/User';

class UsersController {
  // async index(request: Request, response: Response) {
  //   const users = await User.find();

  //   return response.json(users);
  // }

  async store(request: Request, response: Response) {
    const { name } = request.body;

    const findUser = await User.findOne({ name });

    if (findUser) {
      return response.json(findUser);
    }

    const user = await User.create({ name });

    user.save();

    return response.json({ user });
  }
}

export default UsersController;
