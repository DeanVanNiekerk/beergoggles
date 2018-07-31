import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import categoryStore from './categoryStore';
import beerStore from './beerStore';

export default function configureStore() {
  const reducers = {
    category: categoryStore,
    beer: beerStore
  };

  const rootReducer = combineReducers({
    ...reducers
  });

  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
