import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="w-[250px] m-4 bg-">
                <img className="" src={this.props.img}/>
                <h3>{this.props.imdb}</h3>
            </div>
        );
    }
}

export default Card;