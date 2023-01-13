import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.props.img}/>
                <h3>{this.props.imdb}</h3>
            </div>
        );
    }
}

export default Card;