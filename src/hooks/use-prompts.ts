import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useSuspensePrompts = () => {
  const trpc = useTRPC();

  return useSuspenseQuery(trpc.prompts.list.queryOptions());
};
