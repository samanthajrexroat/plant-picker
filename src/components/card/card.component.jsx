import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render () {

        const { id, name, description } = this.props.plant;
        return (
            <div className="card-container" key={id}>
              <img
                alt={`plant ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          );
    }
}

export default Card;