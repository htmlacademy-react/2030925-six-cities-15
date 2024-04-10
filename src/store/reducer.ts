import { createReducer } from '@reduxjs/toolkit';
import { CITY, Cards } from '../mocks/cards';
import { CardType, City } from '../types/card-type';
import { getCards, getSort, getSortedCards, setCity, setCityMap } from './action';
import { SortType, sortCards } from '../const';

type CardsState = {
    cityName: string;
    city: City;
    cards: CardType[];
    sortType: SortType;
};

const initialState: CardsState = {
  cityName: CITY.name,
  city: CITY,
  cards: Cards.filter((card) => card?.city?.name === CITY.name),
  sortType: SortType.Popular
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
      state.cards = sortCards(state.cards, state.sortType)
    })
});
