import React, { PureComponent } from 'react';
import { getShowInfo } from '../../api';
import './Show.css';

class Show extends PureComponent {
  state = {
    showId: null,
    data: null
  };

  componentDidUpdate() {
    const { showId } = this.props;
    if (showId !== null) {
      getShowInfo(showId).then(res => {
        const data = {
          name: res.name,
          genres: res.genres,
          image: res.image,
          summary: res.summary
        };
        this.setState({ showId, data });
      });
    }
  }

  render() {
    let showElement = null;
    const { data } = this.state;
    if (data !== null) {
      const { name, genres, image, summary } = data;
      console.log(genres);
      showElement = (
        <div className="show">
          <img className="show-image" src={image.medium} alt={name} />
          <h2 className="show-label t-show-name">{name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {genres.join(', ')}
          </p>
          <p className="show-text t-show-summary">
            <div dangerouslySetInnerHTML={{ __html: summary }} />
          </p>
        </div>
      );
    } else {
      showElement = (
        <p className="show-information t-show-info">Шоу не выбрано</p>
      );
    }
    return showElement;
  }
}

export default Show;
