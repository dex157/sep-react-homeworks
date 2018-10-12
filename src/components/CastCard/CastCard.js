import React, { Component } from 'react';

class CastCard extends Component {
  render() {
    const {
      person: {
        person: { name, image, id }
      }
    } = this.props;

    return (
      <div key={id} className="t-person">
        <p>{name}</p>
        {image && <img src={image.medium} alt={name} />}
      </div>
    );
  }
}

export default CastCard;
