import React, { Component, PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

export default class Show extends PureComponent {
  state = {
    showId: '',
    data: null
  };

  // Проверяем изменился ли props.showId с прошлого рендеринга
  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.showId !== prevState.showId
      ? { data: null, showId: nextProps.showId }
      : null;
  }

  // После рендера компоненты ждем новых данных для state.data
  componentDidUpdate() {
    const { showId, data } = this.state;

    if (showId !== '' && data === null) {
      getShowInfo(showId).then(resp => {
        this.setState({ data: resp });
      });
    }
  }

  render() {
    const { data } = this.state;

    return data ? (
      <div className="show">
        <img className="show-image" src={data.image.medium} alt={data.name} />
        <h2 className="show-label t-show-name">{data.name}</h2>
        <p className="show-text t-show-genre">
          <b>Жанр: </b>
          {data.genres.map(
            (genre, index, arr) =>
              index !== arr.length - 1 ? `${genre}, ` : genre
          )}
        </p>
        <p
          className="show-text t-show-summary"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />
      </div>
    ) : (
      <p className="show-inforation t-show-info">Шоу не выбрано</p>
    );
  }
}
