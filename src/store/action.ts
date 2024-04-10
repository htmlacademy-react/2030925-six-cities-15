import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/card-type';
import { SortType } from '../const';

export const setCity = createAction('mainPage/setCity', (value: string) => ({payload: value}));

export const getCards = createAction('mainPage/getCards');

export const setCityMap = createAction('mainPage/setCityMap', (value: City) => ({payload: value}));

export const getSort = createAction('mainPage/getSort', (value: SortType) => ({payload: value}));

export const getSortedCards = createAction('getSortedCards');
