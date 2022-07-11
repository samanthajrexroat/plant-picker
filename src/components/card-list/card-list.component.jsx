import { Component } from 'react';

class CardList extends Component {

    render() {
        console.log(this.props.plants)
        console.log('render from CardList')
        const { plants } = this.props;

        return (
            <div className='card-list'>
                { plants.map((plant) => (
                    <h1 key={ plant.id }>{ plant.name }</h1>
                ) )}
            </div>
        )
    }
}

export default CardList;