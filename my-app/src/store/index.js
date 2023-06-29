import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducers = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
