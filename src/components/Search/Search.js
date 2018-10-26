import React, { PureComponent, Fragment } from 'react';
import css from './Search.module.css';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions';
import { getSeries, getIsLoading, getError } from '../../selectors/search';
import ShowPreview from '../ShowPreview';

class Search extends PureComponent {
    state = {
        fieldSearch: ''
    };

    handleChange = e => {
        this.setState({ fieldSearch: e.target.value });
    };

    handleSearch = () => {
        const { searchRequest } = this.props;
        searchRequest(this.state.fieldSearch);
    };

    render() {
        const { series, isLoading, error } = this.props;

        if (isLoading) return <p>Данные загружаются...</p>;
        if (error) return <p>Произошла сетевая ошибка</p>;
        return (
            <Fragment>
                <div className={css.previewList}>
                    <input
                        className={`${css.input} t-input`}
                        placeholder="Название сериала"
                        onChange={this.handleChange}
                    />
                    <div className={css.buttonWrapper}>
                        <button
                            className={`${css.button} t-search-button`}
                            onClick={this.handleSearch}
                        >
                            Найти
                        </button>
                    </div>
                </div>
                <div className={`t-search-result ${css.searchPanel}`}>
                    {series.map(item => (
                        <ShowPreview key={item.id} preview={item} />
                    ))}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    series: getSeries(state),
    isLoading: getIsLoading(state),
    error: getError(state)
});
const mapDispatchToProps = { searchRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
