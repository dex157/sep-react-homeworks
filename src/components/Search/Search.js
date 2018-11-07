import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../reducers/search';
import  ShowPreview  from '../ShowPreview';
import styles from './Search.module.css';

class Search extends Component {
    state = {
        searchValue: '',
    }

    handleSearchChange  = (event) => {
        this.setState({
            searchValue: event.target.value,
        });
    }

    handleSearchBtnClick = () => {
        const { searchValue } = this.state,
              { searchRequest } = this.props;

              searchRequest( searchValue );

              this.setState({
                  searchValue: '',
              });
            }

    render () {
        const { searchValue } = this.state,
              { isFetching, result, error } = this.props;

        return(
            <div>
                <div className = { styles.previewList }>
                    <input className = { `${styles.input} t-input` } placeholder = "Название сериала"  value = { searchValue } onChange = { this.handleSearchChange } />
                    <div className = { styles.buttonWrapper }>
                        <button className = {`${ styles.button } t-search-button`} onClick = { this.handleSearchBtnClick }>Найти</button>
                    </div>
                </div>
                <div className = { `${styles.searchPanel} t-search-result`} >
                    { isFetching ? <p>Loading ...</p> : result.map( row => <ShowPreview key = { row.id } id = { row.id } image = { row.image ? row.image.medium : '' } name = { row.name } summary = { row.summary } />) }
                    { error && <p>{ error }</p>}
                </div>
            </div>

        );
    }
}

const Container = connect(
    (state) => {
        const props = {
            isFetching: state.search.isFetching,
            result: state.search.result,
            error: state.search.error
        };
        return props;
    },
    { searchRequest }
)(Search);

export default Container;