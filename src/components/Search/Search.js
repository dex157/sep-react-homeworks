import React, { Component, Fragment } from 'react';
import ShowPreview from '../ShowPreview';
import { connect } from 'react-redux';
import styles from './Search.module.css';
import { 
    getIsLoading, 
    getError, 
    getSeriesElements, 
    seriesRequest 
} from '../../modules/search';

class Search extends Component {
    state = {
        serialName: ''
    }

    handleEnterKey = event => {
        if (event.key === 'Enter') {
            this.handleClick();
        }
    }

    handleChange = event => {
        this.setState({ serialName: event.target.value });
    }

    handleClick = () => {
        const { serialName } = this.state;
        const { seriesRequest } = this.props;

        if (serialName !== '') {
            seriesRequest(serialName);
        }
    }

    render() {
        const { elements, isLoading, error } = this.props;
        const { serialName } = this.state;

        return (
            isLoading
            ? <p>Выполняется поиск</p>
            : <Fragment>
                <div className={styles.previewList}>
                    <input 
                        className={styles.input + ' t-input'} 
                        placeholder="Название сериала"
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnterKey}
                        value={serialName} />
                    <div className={styles.buttonWrapper}>
                        <button 
                            className={styles.button + ' t-search-button'}
                            onClick={this.handleClick}>
                            Найти
                        </button>
                    </div>
                </div>
                {error !== null 
                    ? <p>Произошла ошибка: {error}</p>
                    : null
                }
                <div className={styles.searchPanel + ' t-search-result'}>
                    {elements.map(element => (
                        <ShowPreview 
                            key={element.id} 
                            element={element} />
                    ))}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    elements: getSeriesElements(state),
    isLoading: getIsLoading(state),
    error: getError(state),
});

const mapDispatchToProps = { seriesRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);