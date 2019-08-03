import { store } from './../store/setup'
import {
  setModal,
  showModal
} from 'reducers/Common'

export function makeActionCreator(type, ...argNames) {
   return function(...args) {
     const action = { type }
     argNames.forEach((arg, index) => {
       action[argNames[index]] = args[index]
     })
     return action
   }
}

export const dispatch = func => {
  store && store.dispatch(func);
};

export const toggleModal = content => {
  const updateModalContent = () => {
    dispatch(setModal(content))
    return Promise.resolve()
  }
  updateModalContent().then(() => dispatch(showModal()))
}

export const checkImageExist = img => {
  return img == 'N/A'
    ? null
    : img
};
