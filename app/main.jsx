'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from './store';
import Main from './react/Main';

ReactDOM.render (
  <Provider store={store}>
  <div>
    <Main/>
   </div>
  </Provider>,
  document.getElementById('main')
)

