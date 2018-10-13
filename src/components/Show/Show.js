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
      this.setState({
        data: 'loading',
        showId: showId
      });
      getShowInfo(showId).then(data => {
        this.setState({
          showId: showId,
          data: data
        });
      });
    }
  }

  render() {
    const { showId, data } = this.state;

    return data === '' ? (
      <p className="show-inforation t-show-info">{`Шоу не выбрано`}</p>
    ) : data === 'loading' ? (
      <p className="show-inforation t-show-info">{`Загрузка шоу с id ${showId}`}</p>
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

export default Show;
