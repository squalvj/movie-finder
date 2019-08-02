import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './../reducers';

export default function configureStore(onCompletion){
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, null, onCompletion);

  return store;
}
