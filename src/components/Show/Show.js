import React, { Component } from 'react';
import { getShowInfo } from '../../api';
import './Show.css';

class Show extends Component {
  state = {
    showId: '',
    data: ''
  };

  componentDidMount() {
    const { showId } = this.props;

    if (showId) {
      getShowInfo(showId).then(data => {
        this.setState({ showId: showId, data: data });
      });
    }
  }

  render() {
    const { data } = this.state;

    if (data) {
      return (
        <div className="show">
          <img
            src={data.image.original}
            alt={data.name}
            className="show-image"
          />
          <h2 className="show-label t-show-name">{data.name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр:</b> {data.genres.join(', ')}
          </p>
          <p
            className="show-text t-show-summary"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
        </div>
      );
    } else {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }
  }
}

export default Show;
