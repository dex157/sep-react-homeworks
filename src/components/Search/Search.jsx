import React from 'react';
import {connect} from 'react-redux';
import {searchRequest} from '../../actions/search';
import styles from './Search.module.css';
import ShowPreview from '../ShowPreview/ShowPreview';

class Search extends React.Component {
  state = {
    value: '',
    isSearched: false,
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
      isSearched: true,
    })
  }

  onClickHandler = () => {
    const { searchRequest } = this.props;
    const { value } = this.state;
    searchRequest(value);
  }

  render() {
    const { value, isSearched } = this.state;
    const { search } = this.props;
    return (
      <div>
        <div className={styles.previewList}>
          <input 
            className={`${styles.input} t-input`} 
            placeholder="Название сериала" 
            value={value} 
            onChange={this.onChangeHandler}
          />
          <div className={styles.buttonWrapper}>
            <button 
            className={`${styles.button} t-search-button`}
            onClick={this.onClickHandler}
            >
              {'Найти'}
            </button>
          </div>
        </div>
        <div className={`${styles.searchPanel} t-search-result`}>
          {isSearched && (
            <div>
              {search.result.map(film => (
                <ShowPreview 
                  key={film.id}
                  id={film.id}
                  imageURL={film.image.medium}
                  name={film.name}
                  description={film.summary}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
    search: state.search,
  }
};

const mapDispatchToProps = {
  searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
