import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import styles from './Search.module.css';
import { connect } from 'react-redux';
import { fetchShowRequest } from '../../actions/actions'
import { getShows, getIsLoading } from '../../reducers/selectors';
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
    const { fetchShowRequest } = this.props;
    const { inputText } = this.state;

    fetchShowRequest(inputText);
    this.setState({
      inputText: ''
    });
  }
  
  render () {
    const { inputText } = this.state;
    const { elements, isLoading, match } = this.props;

    return (
      isLoading ? (
        <p>Данные загружаются...</p>
      ) : (
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
    )
  }
}

const mapStateToProps = state => ({
  elements: getShows(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { fetchShowRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);