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
          const searchString = event.target.value.toLocaleLowerCase();
          // [{ name: 'Leanne'}, { name: 'Sam'}]
          const filteredPlants = this.state.plants.filter((plant) => {
            // if the name of the plant includes the search request, create a new array of those plants.
            return plant.name.toLocaleLowerCase().includes(searchString)
          });
          // Update state with the new array of plants from the search.
          this.setState(() => {
            return { plants: filteredPlants };
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
