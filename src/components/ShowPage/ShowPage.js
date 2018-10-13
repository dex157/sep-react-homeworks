import React, { PureComponent, Fragment } from 'react';
import styles from './ShowPage.module.css';
import CastCard from '../CastCard';
import { connect } from 'react-redux';
import {
  isFetching,
  getError,
  getResult,
  showRequest
} from '../../modules/show';

const mapStateToProps = state => ({
  isFetching: isFetching(state),
  entities: getResult(state),
  error: getError(state)
});
const mapDispatchToProps = { showRequest };

class ShowPage extends PureComponent {
  state = {
    currentShow: null
  };
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      showRequest
    } = this.props;
    showRequest(id);
  }

  getCastCards(cast) {
    cast.forEach(element => {
      const {
        person: { id, name, image }
      } = element;

      return (
        <div key={id} className="t-person">
          <p>{name}</p>
          {image && <img src={image.medium} alt={name} />}
        </div>
      );
    });
  }

  getShowById(id) {
    const { entities } = this.props;
    let currentShow = entities.find(entity => entity.id === parseInt(id));

    if (!currentShow) {
      showRequest(id);
    } else {
      const { name, image, summary, cast } = currentShow;

      return (
        <Fragment>
          <p>{name}</p>
          {image && <img src={image.medium} alt={name} />}

          <div dangerouslySetInnerHTML={{ __html: summary }} />

          <div className={styles.cast}>
            {cast.length
              ? cast.map((person, key) => (
                  <CastCard person={person} key={person.person.id} />
                ))
              : null}
          </div>
        </Fragment>
      );
    }
  }

  render() {
    const {
      match: {
        params: { id }
      },
      isFetching,
      error
    } = this.props;

    return (
      <Fragment>
        {error ? <p>Error: {error}</p> : null}
        {isFetching ? <p>Данные загружаются....</p> : this.getShowById(id)}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
