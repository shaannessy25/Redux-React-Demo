import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/'
import './App.css';
import Counters from './Counters'
import Total from './Total'
import Max from './Max'
import Min from './Min'
import CreateCounter from './CreateCounter'
const store = createStore(reducers)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <CreateCounter />
          <Counters />
          <div className='container-2'>
            <Total />
            <Max />
            <Min />
          </div>
        </div>
      </Provider>
    )
  }
}


export default App;
