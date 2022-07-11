import { Component } from "react";


import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      searchField: ''
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    // [{ name: 'Leanne'}, { name: 'Sam'}]
  
    // Update state with the new array of plants from the search.
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    console.log('render');

    const filteredPlants = this.state.plants.filter((plant) => {
      // if the name of the plant includes the search request, create a new array of those plants.
      return plant.name.toLocaleLowerCase().includes(this.state.searchField)
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder="search plants" onChange={this.onSearchChange}/>
        {filteredPlants.map((plant) => {
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
