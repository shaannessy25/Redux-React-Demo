import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/'
import './App.css';
import Counters from './Counters'
import Total from './Total'
import Max from './Max'
const store = createStore(reducers)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counters />
        </div>
        <Total />
        <Max />
      </Provider>
    )
  }
}


export default App;
