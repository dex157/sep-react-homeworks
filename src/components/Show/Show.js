import React, { Component } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';
class Show extends Component {
  state = {
    showId: null,
    data: {
      image: '',
      name: '',
      genres: [],
      summary: ''
    }
  };

  componentDidUpdate(prevProps) {
    const { showId } = this.props;
    const { showId: oldShowId } = prevProps;

    if (showId !== oldShowId) {
      this.loadData(showId);
    }
  }

  loadData = async id => {
    const data = await getShowInfo(id);
    const {
      image: { original: image },
      name,
      genres,
      summary
    } = data;

    this.setState({
      showId: id,
      data: { image, name, genres, summary }
    });
  };

  render() {
    const {
      showId,
      data: { image, summary, genres, name }
    } = this.state;

    if (!showId) {
      return <p className="show-inforation t-show-info"> Шоу не выбрано </p>;
    }
    return (
      <div className="show">
        <img className="show-image" src={image} alt={name} />
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
  }
}
export default Show;
