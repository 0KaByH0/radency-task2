import { createStore, applyMiddleware, combineReducers } from 'redux';

import { notes } from './reducers/notes';

// const middlewareEnhancer = applyMiddleware(print1, print2, print3);

const store = createStore(
  notes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
