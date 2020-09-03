import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers/'
import './App.css';

const store = createStore()


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}


export default App;
