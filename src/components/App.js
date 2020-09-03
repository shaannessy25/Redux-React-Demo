import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/'
import './App.css';

const store = createStore(reducers)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello World</h1>
        </div>
      </Provider>
    )
  }
}


export default App;
