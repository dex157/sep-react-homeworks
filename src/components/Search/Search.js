import React, { PureComponent, Fragment } from 'react';
import styles from './Search.module.css';
import ShowPreview from '../ShowPreview';
import { connect } from 'react-redux';
import {
  isFetching,
  getError,
  getResult,
  searchRequest
} from '../../modules/search';

const mapStateToProps = state => ({
  isFetching: isFetching(state),
  result: getResult(state),
  error: getError(state)
});
const mapDispatchToProps = { searchRequest };

class Search extends PureComponent {
  state = {
    searchString: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = () => {
    const { searchRequest } = this.props;
    const { searchString } = this.state;

    if (searchString) {
      searchRequest(searchString);
    }
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    const { searchString } = this.state;
    const { result, isFetching, error } = this.props;

    return (
      <Fragment>
        <div className={styles.previewList}>
          <input
            className={styles.input + ' t-input'}
            name="searchString"
            placeholder="Название сериала"
            onChange={this.handleChange}
            value={searchString}
            onKeyPress={this.handleKeyPress}
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
        {error && <p>Ошибка: {error}</p>}
        {isFetching ? (
          <p>Данные загружаются</p>
        ) : (
          <div className={'t-search-result ' + styles.searchPanel}>
            {result.map(item => (
              <ShowPreview
                key={item.id}
                image={item.image}
                name={item.name}
                id={item.id}
                summary={item.summary}
              />
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
