import { Component } from "react";


import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
    };
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { plants: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder="search plants" onChange={(event) => {
          console.log(event.target.value);
          // [{ name: 'Leanne'}, { name: 'Sam'}]
          const filteredPlants = this.state.plants.filter(() => {
            
          })
        }}/>
        {this.state.plants.map((plant) => {
          return (
            <div key={plant.id}>
              <h1>{plant.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
