import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import reducer from './../reducers';

export default function configureStore(onCompletion){
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'Bibit',
      port: 8081,
      realtime: true,
    })
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, null, onCompletion);

  return store;
}
