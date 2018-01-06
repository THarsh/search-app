import React, { Component } from 'react'
import Search from './components/Search'
import ResultList from './components/ResultList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-2">
              <Search />
            </div>
          </div>

          <div className="row">
            <ResultList />
          </div>
        </div>
      </div>
    )
  }
}

export default App
