import React, { Component } from 'react';
import { connect } from 'react-redux';
import className from 'classnames';
import { getSearch, searchRequest } from '../../reducers/search';
import ShowPreview from '../ShowPreview/ShowPreview';

import styles from './Search.module.css';

class Search extends Component {
  state = {
    query: ''
  };

  handleSearchClick = () => {
    const { searchRequest } = this.props;
    const { query } = this.state;
    this.setState({ query: '' });
    searchRequest(query);
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      query: value
    });
  };

  render() {
    const { search } = this.props;
    const { query } = this.state;
    return (
      <div>
        <div className={styles.previewList}>
          <input
            className={className(styles.input, 't-input')}
            placeholder="Название сериала"
            value={query}
            onChange={this.handleInputChange}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={className(styles.button, 't-search-button')}
              onClick={this.handleSearchClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={className('t-search-result', styles.searchPanel)}>
          {search.isFetching ? (
            <p>Данные загружаются...</p>
          ) : search.error !== null ? (
            <p>Произошла сетевая ошибка</p>
          ) : (
            search.result.length !== 0 &&
            search.result.map(show => {
              const { image, name, id, summary } = show;
              return (
                <ShowPreview key={show.id} {...{ image, name, id, summary }} />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  search: getSearch(store)
});
const mapDispatchToProps = dispatch => {
  return {
    searchRequest: query => dispatch(searchRequest(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
