import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  getKey(e) {
    e.preventDefault()
    const keyType = this.refs.inputword.value
    console.log(keyType)

    axios
      .post('htpp://localhost:3001/getlocations', {
        city: keyType
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Search</legend>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="tezt"
              placeholder="text"
              ref="inputword"
            />
          </div>

          <a className="btn btn-primary" onClick={this.getKey.bind(this)}>
            Submit
          </a>
        </fieldset>
      </form>
    )
  }
}

export default Search
