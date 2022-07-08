import { Component } from "react";


import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
    };
  }

  componentDidMount() {
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
    return (
      <div className="App">
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
