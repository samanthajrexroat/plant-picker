import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [
        {
          name: 'African Violet',
          id: 1
        },
        {
          name: 'Golden Pothos',
          id: 2
        },
        {
          name: 'Lucky Bamboo',
          id: 3
        },
        {
          name: 'Rubber Plant',
          id: 4
        }
      ]
    
    }
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
