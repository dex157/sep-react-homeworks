import React, {Component} from 'react'
import style from './Search.module.css'
import  {connect} from 'react-redux'
import {
    getSerials,
    getIsLoading,
    getError,
  } from '../../selectors/selectors';
import { searchRequest} from '../../actions/actions'

class Search extends Component{

    state = {
        searge : ""
    }

    inputChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    searchButtonClick = () => {
        const { searchRequest } = this.props;
        const {searge} = this.state;
        searchRequest(searge);
    }

    render(){
        const { search } =  this.state;
        const { isLoading, error, shows } = this.props;
        console.log(shows);
        console.log(isLoading);
        return (
            <div>
                <div className={style.previewList}>
                    <input
                        name = "searge"
                        className= {`${style.input} t-input`}
                        placeholder='Название сериала'
                        onChange={this.inputChange}
                        value={search}
                    />
                    <div className={style.buttonWrapper}>
                        <button
                            className= {`${style.button} t-search-button`}
                            onClick= {this.searchButtonClick}
                        >Найти
                        </button>
                    </div>
                </div>
                <div className={style.searchPanel}>
                    {shows.map(show => (
                    <div key={show.id}>
                        <p>{show.name}</p>
                    </div>
                    ))}
                </div>
            </div>);
    }
}

const mapStateToProps = state => ({
    shows: getSerials(state),
    isLoading: getIsLoading(state),
    error: getError(state),
});

const mapDispatchToProps = { searchRequest };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);