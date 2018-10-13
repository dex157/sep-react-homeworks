import React, { Component, Fragment } from 'react';
import styles from './Search.module.css';
import { connect } from 'react-redux';
import cx from 'classnames';
import { searchRequest } from '../../actions/searchActions';
import { getShows, getError, getLoading } from '../../reducers/selectors';
import ShowPreview from '../ShowPreview';

class Search extends Component {
  state = {
    inputValue: ''
  };

  onChangeHandler = e => {
    this.setState({ inputValue: e.target.value });
  };
  onKeyPressHandler = e => {
    if (e.key === 'Enter') {
      const { inputValue } = this.state;

      this.initSearch(inputValue);
    }
  };

  initSearch = term => {
    const { searchRequest } = this.props;

    this.validate(term) && searchRequest(term);
  };

  onClickHandler = () => {
    const { inputValue } = this.state;

    this.initSearch(inputValue);
  };

  validate = text => !!text;

  renderShowsPreview = () => {
    const { shows } = this.props;

    return shows.map(({ id, name, image, summary }) => (
      <ShowPreview
        id={id}
        name={name}
        image={image && image.medium}
        summary={summary}
        key={id}
      />
    ));
  };

  render() {
    const { inputValue } = this.state;
    const { isLoading } = this.props;

    if (isLoading) {
      return <div>Загрузка...</div>;
    }

    return (
      <Fragment>
        <div className={styles.previewList}>
          <input
            className={cx(styles.input, 't-input')}
            placeholder="Название сериала"
            value={inputValue}
            onChange={this.onChangeHandler}
            onKeyPress={this.onKeyPressHandler}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={cx(styles.button, 't-search-button')}
              onClick={this.onClickHandler}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={cx(styles.searchPanel, 't-search-result')}>
          {this.renderShowsPreview()}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  shows: getShows(search),
  error: getError(search),
  isLoading: getLoading(search)
});

export default connect(
  mapStateToProps,
  { searchRequest }
)(Search);
