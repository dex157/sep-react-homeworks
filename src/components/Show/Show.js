import React, { Component } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

class Show extends Component {
  state = {
    showId: '',
    data: ''
  };

  componentDidUpdate(prevProp, prevState) {
    const {showId} = this.props;

    if (prevProp.showId === showId) return false;

    getShowInfo(showId).then(data => {
      this.setState({
        showId: showId,
        data: data
      });
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.showId !== nextProps.showId) {
      return {
        showId: nextProps.showId
      };
    }
    return null;
  }

  render() {
    const {data} = this.state;

    return data ? (
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
    ) : (
      <p className="show-inforation t-show-info">{`Шоу не выбрано`}</p>
    );
  }
}

export default Show;
