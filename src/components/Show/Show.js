import React, { Component } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';
class Show extends Component {
  state = {
    showId: false,
    data: {
      image: '',
      name: '',
      genres: [],
      summary: ''
    }
  };

  componentDidMount() {
    const { showId } = this.props;

    this.loadData(showId);
  }

  loadData = async id => {
    try {
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
    } catch (e) {
      this.setState({ showId: null });
    }
  };

  render() {
    const {
      showId,
      data: { image, summary, genres, name }
    } = this.state;

    switch (showId) {
      case false:
        return null;
      case null:
        return <p className="show-inforation t-show-info"> Шоу не выбрано </p>;
      default:
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
}
export default Show;
