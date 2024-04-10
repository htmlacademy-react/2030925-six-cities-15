import { createAction } from '@reduxjs/toolkit';
import { CardType, City } from '../types/card-type';
import { AuthorizationStatus, SortType } from '../const';

export const setCity = createAction('mainPage/setCity', (value: string) => ({payload: value}));

export const getCards = createAction('mainPage/getCards');

export const setCityMap = createAction('mainPage/setCityMap', (value: City) => ({payload: value}));

export const getSort = createAction('mainPage/getSort', (value: SortType) => ({payload: value}));

export const getSortedCards = createAction('getSortedCards');

export const getLoadCards = createAction<CardType[]>('data/getLoadCards');

export const setCardsIsLoading = createAction<boolean>('setCardsIsLoading');

export const getAuthorization = createAction<AuthorizationStatus>('user/getAuthorization');

export const setError = createAction<string | null>('setError');
