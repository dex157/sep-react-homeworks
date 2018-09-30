import React, { Component } from 'react';
import { getShowInfo } from '../../api';

import './Show.css';

export default class Show extends Component {
  state = {
    data: null,
    showId: ''
  };

  static getDerivedStateFromProps(props, state) {
    if (state.showId !== props.showId) {
      return { showId: props.showId, data: null };
    }

    return null;
  }

  componentDidUpdate() {
    const { showId, data } = this.state;

    if (data === null && showId !== '') {
      getShowInfo(showId).then(data => {
        this.setState({ data: data });
      });
    }
  }

  renderShow = ({ image, name, genres, summary }) => (
    <div className="show">
      <img className="show-image" src={image.original} alt={name} />
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

  render() {
    const { data, showId } = this.state;

    if (showId === '') {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }

    if (showId !== '' && data === null) {
      return (
        <p className="show-inforation t-show-info">
          Загрузка шоу с id {showId}
        </p>
      );
    }

    return this.renderShow(data);
  }
}
