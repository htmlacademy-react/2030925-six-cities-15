import { createReducer } from '@reduxjs/toolkit';
import { CITY, Cards } from '../mocks/cards';
import { CardType, City } from '../types/card-type';
import { getCards, setCity, setCityMap } from './action';

type CardsState = {
    cityName: string;
    city: City;
    cards: CardType[];
};

const initialState: CardsState = {
  cityName: CITY.name,
  city: CITY,
  cards: Cards.filter((card) => card?.city?.name === CITY.name)
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
    });
});
