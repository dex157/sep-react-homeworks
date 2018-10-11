import React, { PureComponent, Fragment } from 'react';
import styles from './Search.module.css';
import ShowPreview from '../ShowPreview';
import { connect } from 'react-redux';
import {
  isFetching,
  getError,
  getResult,
  searchSeries
} from '../../modules/search';

class Search extends PureComponent {
  state = {
    searchString: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = () => {
    console.log('click');
    this.props.searchSeries(this.state.searchString);
  };

  componentDidMount() {
    // const { searchSeries } = this.props;
    // searchSeries('13');
  }

  render() {
    const { searchString } = this.state;
    return (
      <Fragment>
        <div className={styles.previewList}>
          <input
            className={styles.input + ' t-input'}
            name="searchString"
            placeholder="Название сериала"
            onChange={this.handleChange}
            value={searchString}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={styles.button + ' t-search-button'}
              onClick={this.handleClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={'t-search-result' + styles.searchPanel}>
          <ShowPreview />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: isFetching(state),
  result: getResult(state),
  error: getError(state)
});

const mapDispatchToProps = { searchSeries };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
