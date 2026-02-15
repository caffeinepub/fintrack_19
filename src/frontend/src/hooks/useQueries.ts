import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { CategoryID, Time } from '../backend';

interface AddTransactionParams {
  amount: number;
  description: string;
  timestamp: Time;
  categoryId: CategoryID | null;
}

export function useAddTransaction() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: AddTransactionParams) => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.addTransaction(
        params.amount,
        params.description,
        params.timestamp,
        params.categoryId
      );
    },
    onSuccess: () => {
      // Invalidate relevant queries when they're implemented
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });
}

export function useAddCategory() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.addCategory(title);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
}

export function useAddRule() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: { keyword: string; categoryId: CategoryID }) => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.addRule(params.keyword, params.categoryId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rules'] });
    },
  });
}
