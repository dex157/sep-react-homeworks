import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    changeSearchInputValue,
    searchRequest,
} from '../../actionCreators/searchAction';
import style from './Search.module.css';
import ShowPreview from '../ShowPreview';

class Search extends Component{

    changeSearchValue = (e) => {
        const value = e.target.value,
              {changeSearchInputValue} = this.props;
        changeSearchInputValue(value);
    }

    sendSearchQuery = (e) => {
        const {searchRequest, searchValue} = this.props;
        searchRequest(searchValue);
    }


    render() {
        const { data, isLoading, error, searchValue } = this.props;

        if(isLoading) {
            return <p>Выполняется поиск</p>
        }

        if(error) {
            return <p>Произошла сетевая ошибка</p>
        }

        if(data.length !== 0) {
            return (
                <>
                    <div className={style.previewList}>
                        <input className={`${style.input} t-input`} placeholder="Название сериала"  onChange={this.changeSearchValue} value={searchValue} />
                        <div className={style.buttonWrapper}>
                            <button onClick={this.sendSearchQuery} className={`${style.button} t-search-button`}>Найти</button>
                        </div>
                    </div>
                    <div className={`t-search-result ${style.searchPanel}`}>
                        <ShowPreview shows={data}/>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className={style.previewList}>
                        <input className={`${style.input} t-input`} placeholder="Название сериала"  onChange={this.changeSearchValue} value={searchValue} />
                        <div className={style.buttonWrapper}>
                            <button onClick={this.sendSearchQuery} className={`${style.button} t-search-button`}>Найти</button>
                        </div>
                    </div>
                </>
            )
        }
        
    }
}

const mapStateToProps = state => ({
    data: state.search.data,
    isLoading: state.search.isLoading,
    error: state.search.error,
    searchValue: state.search.searchValue
});

const mapDispatchToProps = { 
    searchRequest,
    changeSearchInputValue
 };

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Search);