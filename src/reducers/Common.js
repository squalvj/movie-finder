import update from 'immutability-helper';
import {makeActionCreator} from './../utils'

const INITIAL_STATE = {
   isLoading: false
 };

const prefix = 'common/';
const injectPrefix = name => {
   return `${prefix}${name}`
}

function handleShow(state) {
  return update(state, {
    isLoading: {
      $set: true,
    },
  });
}

function handleHide(state) {
  return update(state, {
    isLoading: {
      $set: false,
    },
  });
}

const ACTION = {
   SHOW_LOADER: handleShow,
   HIDE_LOADER: handleHide,
}

export const showLoader = makeActionCreator(injectPrefix('SHOW_LOADER'))
export const hideLoader = makeActionCreator(injectPrefix('HIDE_LOADER'))

export default function reducer(state = INITIAL_STATE, action) {
   const typeWithoutPrefix = (action.type && action.type.split('/')[1])
   const handler = ACTION[typeWithoutPrefix];
   return handler ? handler(state, action) : state;
}