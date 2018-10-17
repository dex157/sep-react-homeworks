import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getData, getIsloading, getError } from '../../reducers/search'
import {  getSearchRequest } from '../../actions'
import ShowPreview from '../ShowPreview'
import cn from 'classnames'
import style from './Search.module.css'

class Search extends PureComponent {
    state = {
        show: '',
    }

    handleChange = ({target: { value } }) => {
        this.setState({show: value})
    } 

    handleClick = () => {
        const { show } = this.state;
        const { getSearchRequest } = this.props;

        getSearchRequest(show);
    }

    renderLoading = () => <p>Идет загрузка ...</p>

    renderSearch = () => {
        const { show } = this.state
        return (
            <div className={style.previewList}>
                <input 
                    className={cn(style.input, 't-input')}
                    placeholder={'Название сериала'}
                    value={show}
                    onChange={this.handleChange}
                />
                <div className={style.buttonWrapper}>
                    <button 
                        className={cn(style.button, 't-search-button')} 
                        onClick={this.handleClick}
                        children={'Найти'}
                    />
                </div>
            </div>
        )
    }

    render() {
        const { isLoading, data } = this.props

        return(
            <>
                { isLoading ? this.renderSearch() : this.renderLoading() }

                <div className={cn(style.searchPanel, 't-search-result')}>
                    { data.map(el => {
                        return <ShowPreview {...el} />
                    }) }
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: getIsloading(state),
    data: getData(state),
    error: getError(state)
});
const mapDispatchToProps = { getSearchRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Search)