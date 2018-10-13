import React, { Component } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

class Show extends Component {
  state = {
    showId: '',
    data: null
  };

  componentDidMount() {
    const { showId } = this.props;
    
    if (showId !== '') {
      (async () => {
        const data = await getShowInfo(showId);
        await this.setState({ data: data });
      })();
    }
  }

  render() {
    const { data } = this.state;
    console.log(data)

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

export default Show;