import update from 'immutability-helper';
import {makeActionCreator} from './../utils'
import { get } from 'lodash'
const INITIAL_STATE = {
   movies: {}
 };

const prefix = 'movies/';
const injectPrefix = name => {
   return `${prefix}${name}`
}

function handleSet(state, action) {
   const data = get(action, 'payload', {})
   return update(state, {
      movies: {
         $set: data,
      },
   });
}

function handleAdd(state, action) {
   const data = get(action, 'payload.Search', [])
   return update(state, {
      movies: {
         Search: {
            $set: [...state.movies.Search, ...data],
         }
      },
   });
}

const ACTION = {
   SET_MOVIES: handleSet,
   ADD_MOVIES: handleAdd,
}

export const setMovies = makeActionCreator(injectPrefix('SET_MOVIES'), 'payload')
export const addMovies = makeActionCreator(injectPrefix('ADD_MOVIES'), 'payload')

export default function reducer(state = INITIAL_STATE, action) {
   const typeWithoutPrefix = (action.type && action.type.split('/')[1])
   const handler = ACTION[typeWithoutPrefix];
   return handler ? handler(state, action) : state;
}