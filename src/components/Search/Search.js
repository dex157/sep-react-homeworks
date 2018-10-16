import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ShowPreview from 'components/ShowPreview';
import { getData, getError, getLoading } from '../../reducers/search';
import { searchRequest } from '../../actions/search';
import styles from './Search.module.css';
import cls from 'classnames';

class Search extends Component {
  state = {
    inputValue: ''
  };

  onChangeHandler = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleSearchButtonClick = () => {
    const { searchRequest } = this.props;
    const { inputValue } = this.state;

    searchRequest(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    const { shows, isLoading, error } = this.props;

    return (
      <Fragment>
        <div className={styles.previewList}>
          <input
            className={cls(styles.input, ' t-input')}
            type="text"
            placeholder="Название сериала"
            value={inputValue}
            onChange={this.onChangeHandler}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={cls(styles.button, ' t-search-button')}
              onClick={this.handleSearchButtonClick}
            >
              Найти
            </button>
          </div>
        </div>
        {error && <p>Ошибка: {error}</p>}
        {isLoading ? (
          <p>Данные загружаются</p>
        ) : (
          <div className={cls('t-search-result ', styles.searchPanel)}>
            {shows.map(item => (
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

const mapStateToProps = ({ search }) => ({
  shows: getData(search),
  error: getError(search),
  isLoading: getLoading(search)
});

export default connect(
  mapStateToProps,
  { searchRequest }
)(Search);
