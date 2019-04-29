import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default configureStore;
export type AppState = ReturnType<typeof rootReducer>;
