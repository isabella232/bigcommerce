import { Context } from '../../types';

export const getUserId = (context: Context): number => {
  return context.user.user.value ? context.user.user.value.id : 0;
};
