import { createStore } from 'redux';

import { notes } from './reducers/notes';

const store = createStore(
  notes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
