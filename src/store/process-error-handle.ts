import { store } from '.';
import { setError } from './action';
import { clearErrorAction } from './api-action';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
