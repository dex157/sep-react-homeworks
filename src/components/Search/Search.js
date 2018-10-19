import React, {Component} from 'react'
import style from './Search.module.css'
import  {connect} from 'react-redux'
// import {
//     getSerials,
//     getIsLoading,
//     getError,
//   } from '../../selectors/selectors';
import { searchRequest} from '../../actions/actions'

class Search extends Component{

    state = {
        searge : ""
    }

    inputChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    searchButtonClick= () => {
        // const { getSerials } = this.props;
        console.log("searchButtonClick");
        searchRequest();
    }

    render(){
        const {search} =  this.state;
        return (
            <div>
                <div className={style.previewList}>
                    <input
                        name = "searge"
                        className= {`${style.input} t-input`}
                        placeholder='Название сериала'
                        onChange={this.changeInput}
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
                <div className={style.searchPanel}></div>
            </div>);
    }
}

const mapStateToProps = state => ({
    // serials: getSerials(state),
    // isLoading: getIsLoading(state),
    // error: getError(state),
  });

const mapDispatchToProps = { searchRequest };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);