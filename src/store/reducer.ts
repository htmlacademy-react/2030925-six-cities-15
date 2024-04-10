import { createReducer } from '@reduxjs/toolkit';
import { CITY, Cards } from '../mocks/cards';
import { CardType, City } from '../types/card-type';
import { getAuthorization, getCards, getLoadCards, getSort, getSortedCards, setCity, setCityMap, setError } from './action';
import { AuthorizationStatus, SortType, sortCards } from '../const';

type CardsState = {
    cityName: string;
    city: City;
    cards: CardType[];
    sortType: SortType;
    isLoading: boolean;
    authorizationStatus: AuthorizationStatus;
    error: string | null;
};

const initialState: CardsState = {
  cityName: CITY.name,
  city: CITY,
  cards: Cards.filter((card) => card?.city?.name === CITY.name),
  sortType: SortType.Popular,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(getCards, (state) => {
      state.cards = Cards.filter((card) => card?.city?.name === state.cityName);
    })
    .addCase(setCityMap, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(getSortedCards, (state) => {
      state.cards = sortCards(state.cards, state.sortType);
    })
    .addCase(getLoadCards, (state, action) => {
      state.cards = action.payload;
    })
    .addCase(getAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
