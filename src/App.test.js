import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Entry';
import DrinkDetail from './Components/DrinkDetail'
import configureStore from './store/configureStore'

import { default as configureMockStore}  from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getRandomCocktails, isDataFetching } from './store/cocktails'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Testing get Rand Cocktail', () => {
  it('should get a random cocktail', () => {
    const store = mockStore({});
      return store.dispatch(getRandomCocktails())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0]).toEqual(isDataFetching())
        })
        .then(() => {
          const actions = store.getActions()
          expect(actions[1]).toBeDefined()
        })
        .then(() => {
          const actions = store.getActions()
          expect(actions[2]).toEqual(isDataFetching())
        })
  });
})


describe('Testing get Rand Cocktail', () => {
  const store = configureStore()
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Entry store={store}/>, div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DrinkDetail store={store}/>, div);
  });
})