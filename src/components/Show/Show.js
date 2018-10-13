import React, { Component } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

export default class Show extends Component {
  state = {
    showId: '',
    data: ''
  };

  componentDidUpdate(prevProp, prevState) {
    const { showId } = this.props;

    if (prevProp.showId === showId) {
      return null;
    }

    getShowInfo(showId).then(data => {
      this.setState({
        showId: showId,
        data: data
      });
    });
  }

  render() {
    const { data } = this.state;

    return data === '' ? (
      <p className="show-inforation t-show-info">{`Шоу не выбрано`}</p>
    ) : (
      <div className="show">
        <img
          className="show-image"
          src={data.image['medium']}
          alt={data.name}
        />
        <h2 className="show-label t-show-name">{data.name}</h2>
        <p className="show-text t-show-genre">
          <b>Жанр: </b>
          {data.genres.join(', ')}
        </p>
        <p
          className="show-text t-show-summary"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />
      </div>
    );
  }
}
