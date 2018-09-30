import React, { PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api.js';

class Show extends PureComponent {
  state = {
    showId: '',
    data: {}
  };

  componentDidUpdate = (prevProp, prevState) => {
    var showId = this.props.showId;

    if (showId !== prevProp.showId) {
      getShowInfo(showId).then(data => {
        this.setState({ data });
      });
    }
  };

  isEmpty(object) {
    return JSON.stringify(object) === '{}';
  }

  render() {
    const { data, data: { image, name, genres, summary }} = this.state;

    if (!this.isEmpty(data)) {
      return (
        <div className="show">
          <img
            className="show-image"
            src={image.original}
            alt={name}
          />
          <h2 className="show-label t-show-name">{name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {genres.join(', ')}
          </p>
          <p
            className="show-text t-show-summary"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
      );
    } else {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }
  }
}

export default Show;
