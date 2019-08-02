import * as React from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './../App';

export const store = configureStore(() => {});

export default class Setup extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      store,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
