import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.css';
import cx from 'classnames';
import ShowPreview from '../ShowPreview';
import { searchRequest } from '../../actions';
import { getIsLoading, getShows, getError } from '../../selectors/search';

class Search extends Component {
  state = {
    searchInput: ''
  };

  handleChange = event => {
    const { value } = event.target;

    this.setState({ searchInput: value });
  };

  handleClick = () => {
    const { searchInput } = this.state;
    const { searchRequest } = this.props;

    searchRequest(searchInput);

    this.setState({ searchInput: '' });
  };

  renderSearch = () => {
    const { searchInput } = this.state;

    return (
      <div className={styles.searchPanel}>
        <input
          className={cx(styles.input, 't-input')}
          placeholder="Название сериала"
          value={searchInput}
          onChange={this.handleChange}
        />
        <div className={styles.buttonWrapper}>
          <button
            className={cx(styles.button, 't-search-button')}
            onClick={this.handleClick}
          >
            Найти
          </button>
        </div>
      </div>
    );
  };

  renderShows = () => {
    const { shows, isLoading, error } = this.props;

    if (error) return <div>Произошла сетевая ошибка</div>;
    if (isLoading) return <div>Данные загружаются...</div>;

    return shows.map(show => <ShowPreview key={show.id} {...show} />);
  };

  render() {
    return (
      <div>
        {this.renderSearch()}
        <div className={cx('t-search-result', styles.previewList)}>
          {this.renderShows()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: getShows(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

const mapDispatchToProps = {
  searchRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
