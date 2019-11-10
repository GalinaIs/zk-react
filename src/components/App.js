import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import PageContainer from '../containers/PageContainer'
import ZkTree from './tree/Tree'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageContainer />
        <UserContainer />
        <ZkTree />
      </div>
    )
  }
}

export default App
