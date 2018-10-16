import React, {Component, Fragment} from 'react';
import ShowPreview from '../ShowPreview';
import {connect} from 'react-redux';
import {searchRequest} from '../../actions/searchActions';
import {getShows, getError, getLoading} from '../../reducers/search';
import style from './Search.module.css';

class Search extends Component {
    state = {
      inputValue: ''
    };
  
    onChangeHandler = e => {
      this.setState({ inputValue: e.target.value });
    };
  
    validate = text => !!text;

    initSearch = term => {
      const {searchRequest} = this.props;
      this.validate(term) && searchRequest(term);
    };
  
    onClickHandler = () => {
      const {inputValue} = this.state;
      this.initSearch(inputValue);
    };
  
    renderShowsPreview = () => {
      const {shows} = this.props;
      return shows.map(({id, name, image, summary}) => (
        <ShowPreview
          id = {id}
          name =  {name}
          image = {image && image.medium}
          summary = {summary}
          key = {id}
        />
      ));
    };
  
    render() {
      const {inputValue} = this.state;
      const {isLoading} = this.props;
  
      if (isLoading) {
        return <div>Загрузка...</div>;
      }
  
      return (
        <Fragment>
          <div className = {style.previewList}>
            <input
              className = {style.input + ' t-input'}
              placeholder = "Название сериала"
              value = {inputValue}
              onChange = {this.onChangeHandler}
            />
            <div className = {style.buttonWrapper}>
              <button 
                className = {style.button + ' t-search-button'}
                onClick = {this.onClickHandler}
              >
                Найти
              </button>
            </div>
          </div>
          <div className = {style.searchPanel + ' t-search-result'}>
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
  
export default connect(mapStateToProps, {searchRequest})(Search);
  