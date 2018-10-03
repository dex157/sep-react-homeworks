import React, { PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api.js';

class Show extends PureComponent {
  state = {
    showId: '',
    data: null
  };

  componentDidUpdate = prevProp => {
    const { showId } = this.props;

    if (showId !== '' && showId !== prevProp.showId) {
      getShowInfo(showId).then(data => {
        this.setState({ data });
      });
    }
  };

  render() {
    const { data } = this.state;
    if (data) {
      return (
        <div className="show">
          <img
            className="show-image"
            src={data.image.original}
            alt={data.name}
          />
          <h2 className="show-label t-show-name">{data.name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {data.genres.join(', ')}
          </p>
          <p
            className="show-text t-show-summary"
            dangerouslySetInnerHTML={{ __html: `${data.summary}` }}
          />
        </div>
      );
    } else {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    }
  }
}

export default Show;
