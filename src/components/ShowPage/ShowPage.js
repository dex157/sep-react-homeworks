import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  showRequest,
  getEntities,
  getError,
  getIsFetching
} from '../../reducers/snows';

import styles from './ShowPage.module.css';

class ShowPage extends Component {
  componentDidMount() {
    const { showRequest, match } = this.props;
    showRequest(match.params.id);
  }

  render() {
    const { show, isFetching, error } = this.props;

    if (isFetching || show === null) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    if (show !== null)
      return (
        <div>
          <p>{show.name}</p>
          {show.image && <img src={show.image.medium} alt={show.name} />}
          <div dangerouslySetInnerHTML={{ __html: show.summary }} />
          <div className={styles.cast}>
            {show['_embedded'].cast.map(c => {
              return (
                <div key={c.person.id} className="t-person">
                  <p>{c.person.name}</p>
                  {c.person.image && (
                    <img src={c.person.image.medium} alt={c.person.name} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
  }
}

const mapStateToProps = store => ({
  show: getEntities(store),
  isFetching: getIsFetching(store),
  error: getError(store)
});
const mapDispatchToProps = dispatch => {
  return {
    showRequest: show => dispatch(showRequest(show))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
