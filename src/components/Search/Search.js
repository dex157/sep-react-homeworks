import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import styles from './Search.module.css';
import { connect } from 'react-redux';
import { fetchSearchRequest } from '../../actions/actions'
import { getSearchShows, getSearchIsLoading, getSearchError } from '../../reducers/selectors';
import ShowPreview from '../ShowPreview'

class Search extends Component {
  state = {
    inputText: '',
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  onClickSearch = event => {
    const { fetchSearchRequest } = this.props;
    const { inputText } = this.state;

    fetchSearchRequest(inputText);
    this.setState({
      inputText: ''
    });
  }
  
  render () {
    const { inputText } = this.state;
    const { elements, isLoading, match, error } = this.props;

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;
    
    return (
      <div>
        <div className={styles.previewList}>
          <input 
            className={`${styles.input} t-input`}
            placeholder='Название сериала'
            onChange={this.handleChange}
            value={inputText}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.button} t-search-button`} 
              onClick={this.onClickSearch}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={`t-search-result ${styles.searchPanel}`}>
          {elements.map(el => (
            <ShowPreview key={el.id} match={match} show={el}/>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  elements: getSearchShows(state),
  isLoading: getSearchIsLoading(state),
  error: getSearchError(state),
});

const mapDispatchToProps = { fetchSearchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);