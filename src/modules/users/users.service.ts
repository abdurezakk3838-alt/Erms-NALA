import { Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';

type CreateUserInput = {
  email: string;
  name?: string;
};

export const usersService = {
  async list() {
    return prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  },
  async create(input: CreateUserInput) {
    try {
      return await prisma.user.create({
        data: {
          email: input.email,
          name: input.name
        }
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new Error('User with this email already exists');
      }

      throw error;
    }
  }
};
