import React, { PureComponent, Fragment } from 'react';
import styles from './ShowPage.module.css';
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
    const { id, showRequest } = this.props;

    showRequest(id);
  }

  getShowById(id) {
    const { entities } = this.props;

    let currentShow;
    currentShow = entities.filter(entity => (entity.id === id ? entity : null));
    if (!currentShow) {
      showRequest(id);
    } else {
      return (
        <Fragment>
          <p>Warehouse 13</p>
          <img
            src="http://static.tvmaze.com/uploads/images/medium_portrait/160/402219.jpg"
            alt="Warehouse 13"
          />
          <div>
            <p>
              After saving the life of the President, two Secret Service agents
              find themselves abruptly transferred to Warehouse 13 -- a massive,
              top-secret storage facility in windswept South Dakota that houses
              every strange artifact, mysterious relic, fantastical object and
              supernatural souvenir ever collected by the U.S. government. The
              Warehouse's caretaker Artie charges Pete and Myka with chasing
              down reports of supernatural and paranormal activity in search of
              new objects to cache at the Warehouse, as well as helping him to
              control the warehouse, itself. Rounding out the team is technology
              specialist Claudia and former ATF Steve Jinks.
            </p>
          </div>
          <div className={styles.cast}>
            <div className="t-person">
              <p>Joanne Kelly</p>
              <img
                src="http://static.tvmaze.com/uploads/images/medium_portrait/3/9088.jpg"
                alt="Joanne Kelly"
              />
            </div>
          </div>
        </Fragment>
      );
    }
  }

  render() {
    const { id, isFetching, error } = this.props;

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
