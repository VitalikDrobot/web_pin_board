import React, { Component } from 'react'
import axios from 'axios'

class PinsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pins: []
    }
  }

  componentDidMount() {
  axios.get('https://tranquil-crag-19897.herokuapp.com/api/v1/pins.json')
  .then(response => {
    console.log(response)
    this.setState({pins: response.data})
  })
  .catch(error => console.log(error))
}

  render() {
    return (
      <div>
        {this.state.pins.map((pin) => {
          return(
            <div className="tile" key={pin.id} >
              <h4>{pin.title}</h4>
              <p>{pin.description}</p>
            </div>
          )
        })}
        </div>
      );
    }
}

export default PinsContainer;
