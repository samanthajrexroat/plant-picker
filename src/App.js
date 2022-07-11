import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      searchField: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { plants: users };
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    // Update state with the new array of plants from the search.
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    console.log('render from AppJS')
    const { plants, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredPlants = plants.filter((plant) => {
      // if the name of the plant includes the search request, create a new array of those plants.
      return plant.name.toLocaleLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='search plants' className='plants-search-box'/>
        <CardList plants={filteredPlants}/>
      </div>
    );
  }
}

export default App;
