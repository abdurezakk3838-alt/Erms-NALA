import { NextFunction, Request, Response } from 'express';
import { usersService } from './users.service';

export const usersController = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await usersService.list();

      res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await usersService.create(req.body);

      res.status(201).json({ data: user });
    } catch (error) {
      next(error);
    }
  }
};
