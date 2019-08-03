import update from 'immutability-helper';
import {makeActionCreator} from './../utils'

const INITIAL_STATE = {
   isLoading: false,
   modalContent: {},
   modalVisible: false
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

function handleShowModal(state) {
  return update(state, {
    modalVisible: {
      $set: true,
    },
  });
}

function handleHideModal(state) {
  return update(state, {
    modalVisible: {
      $set: false,
    },
  });
}

function handleSetModalContent(state, action) {
  console.log({action})
  return update(state, {
    modalContent: {
      $set: action.content,
    },
  });
}

const ACTION = {
   SHOW_LOADER: handleShow,
   HIDE_LOADER: handleHide,
   SHOW_MODAL: handleShowModal,
   HIDE_MODAL: handleHideModal,
   SET_MODAL_CONTENT: handleSetModalContent
}

export const showLoader = makeActionCreator(injectPrefix('SHOW_LOADER'))
export const hideLoader = makeActionCreator(injectPrefix('HIDE_LOADER'))
export const showModal = makeActionCreator(injectPrefix('SHOW_MODAL'))
export const hideModal = makeActionCreator(injectPrefix('HIDE_MODAL'))
export const setModal = makeActionCreator(injectPrefix('SET_MODAL_CONTENT'), 'content')

export default function reducer(state = INITIAL_STATE, action) {
   const typeWithoutPrefix = (action.type && action.type.split('/')[1])
   const handler = ACTION[typeWithoutPrefix];
   return handler ? handler(state, action) : state;
}