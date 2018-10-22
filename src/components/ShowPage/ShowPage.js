import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';
import styles from './ShowPage.module.css';

import { getIsLoading, getError, getShow } from '../../selectors/shows';

class ShowPage extends Component {
  componentDidMount() {
    const {
      match: { params },
      showRequest
    } = this.props;

    showRequest(params.id);
  }

  render() {
    const { show, isLoading, error } = this.props;

    if (error) return <div>{error}</div>;
    if (isLoading || !show) return <div>Данные загружаются...</div>;

    return (
      <div>
        <p>{show.name}</p>
        <img src={show.image.medium} alt={show.name} />
        <div>
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
        <div className={styles.cast}>
          {show.cast.map(person => (
            <div className="t-person" key={person.id}>
              <p>{person.name}</p>
              <img src={person.image.medium} alt={person.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: getShow(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

const mapDispatchToProps = {
  showRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);