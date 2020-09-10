import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/'
import './App.css';
import Counter from './Counter'
const store = createStore(reducers)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
        </div>
      </Provider>
    )
  }
}


export default App;
