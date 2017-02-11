import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import statess from './servers'
import App from './domsserver'

const stores = createStore(statess)

stores.subscribe(function () {
    console.log(stores.getState());
});

render(
  <Provider store={stores}>
  	<App/>
  </Provider>,
  document.getElementById('root')
)



