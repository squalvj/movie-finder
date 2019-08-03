import update from 'immutability-helper';
import {makeActionCreator} from './../utils'

const INITIAL_STATE = {
   movies: {}
 };

const prefix = 'movies/';
const injectPrefix = name => {
   return `${prefix}${name}`
}

function handleSet(state, action) {
   const data = action.payload
   return update(state, {
      movies: {
         $set: data,
      },
   });
}

const ACTION = {
   SET_MOVIES: handleSet,
}

export const setMovies = makeActionCreator(injectPrefix('SET_MOVIES'), 'payload')

export default function reducer(state = INITIAL_STATE, action) {
   const typeWithoutPrefix = (action.type && action.type.split('/')[1])
   const handler = ACTION[typeWithoutPrefix];
   return handler ? handler(state, action) : state;
}