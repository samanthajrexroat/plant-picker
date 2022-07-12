import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
class CardList extends Component {
  render() {
    console.log(this.props.plants);
    console.log("render from CardList");
    const { plants } = this.props;

    return (
      <div className="card-list">
        {plants.map((plant) => {
          return <Card plant={plant} />;
        })}
      </div>
    );
  }
}

export default CardList;
