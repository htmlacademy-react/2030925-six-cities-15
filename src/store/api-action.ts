import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { store } from '.';
import { ApiRoute, AuthorizationStatus, ERROR_TIMEOUT } from '../const';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { AppDispatch, RootState } from '../types/store';
import { UserData } from '../types/user-data';
import { getAuthorization, getCards, getLoadCards, setCardsIsLoading, setError } from './action';
import { CardType } from '../types/card-type';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_TIMEOUT,
    );
  },
);

export const fetchQuestionAction = createAsyncThunk<void, undefined, {
      dispatch: AppDispatch;
      state: RootState;
      extra: AxiosInstance;
  }>(
    'data/fetchQuestions',
    async (_arg, { dispatch, extra: api }) => {
      dispatch(setCardsIsLoading(true));

      const { data } = await api.get<CardType[]>(ApiRoute.Offers);
      dispatch(setCardsIsLoading(false));
      dispatch(getLoadCards(data));
      dispatch(getCards());
    },
  );

export const checkAuthStatusAction = createAsyncThunk<void, undefined, {
      dispatch: AppDispatch;
      state: RootState;
      extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, { dispatch, extra: api }) => {
      try {
        await api.get(ApiRoute.LogIn);
        dispatch(getAuthorization(AuthorizationStatus.Auth));
      } catch {
        dispatch(getAuthorization(AuthorizationStatus.NoAuth));
      }
    },
  );

export const logInAction = createAsyncThunk<void, AuthData, {
      dispatch: AppDispatch;
      state: RootState;
      extra: AxiosInstance;
  }>(
    'user/login',
    async ({ login: email, password }, { dispatch, extra: api }) => {
      const { data: { token } } = await api.post<UserData>(ApiRoute.LogIn, { email, password });
      saveToken(token);
      dispatch(getAuthorization(AuthorizationStatus.Auth));
    },
  );

export const logOutAction = createAsyncThunk<void, undefined, {
      dispatch: AppDispatch;
      state: RootState;
      extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, { dispatch, extra: api }) => {
      await api.delete(ApiRoute.LogOut);
      dropToken();
      dispatch(getAuthorization(AuthorizationStatus.NoAuth));
    },
  );
