import { combineReducers } from 'redux';

import commonReducer from './Common';
import movie from './Movie';

export default combineReducers({
  common: commonReducer,
  movies: movie,
});
