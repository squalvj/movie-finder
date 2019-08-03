import { store } from './../store/setup'

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