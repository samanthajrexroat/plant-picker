import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => console.log(users))
  }

  render() {

    return (
      <div className="App">
        {
          this.state.plants.map((plant) => {
            return (
              <div key={plant.id}>
                <h1>{plant.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}



export default App;
