import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Import your rootReducer
import rootSaga from './saga'; // Import your rootSaga

// Create Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store with rootReducer and apply middleware
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
