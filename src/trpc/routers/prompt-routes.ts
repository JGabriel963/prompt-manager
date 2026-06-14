import { prisma } from '@/lib/prisma';
import { baseProcedure, createTRPCRouter } from '../init';

export const promptRoutes = createTRPCRouter({
  list: baseProcedure.query(async () => {
    return await prisma.prompt.findMany();
  }),
});
