import { createTRPCRouter } from '../init';
import { promptRoutes } from './prompt-routes';

export const appRouter = createTRPCRouter({
  prompts: promptRoutes,
});
// export type definition of API
export type AppRouter = typeof appRouter;
