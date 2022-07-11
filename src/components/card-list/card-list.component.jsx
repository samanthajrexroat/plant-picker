import { Component } from 'react';

class CardList extends Component {

    render() {
        console.log('render')
        const { plants } = this.props;

        return (
            <div>
                { plants.map(plant => (
                    <h1 key={ plant.id }>{ plant.name }</h1>
                ) )}
            </div>
        )
    }
}

export default CardList;