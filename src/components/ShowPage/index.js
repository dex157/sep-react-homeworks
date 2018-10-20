import React, {Component} from 'react'
import style from './ShowPage.module.css'
import { Link } from 'react-router-dom'
import  {connect} from 'react-redux'
import {
    getCast,
    getIsLoadingShow,
    getErrorShow,
  } from '../../selectors/selectors';
import { showRequest} from '../../actions/actions'

class ShowPage extends Component{
    componentDidMount() {
        const { match:{params: {id}}, showRequest } = this.props;
        showRequest(id);
    }

    render(){
        const {match:{params: {id}}, castList, isLoading, error } = this.props;
        const cast = castList.cast !== undefined ? castList.cast : []

        if (isLoading) return <p>Данные загружаются...</p>;
        if (error) return <p>Произошла ошибка</p>;

        return (
            <div>
                <p>{castList.name}</p>
                <img src={castList.image} alt={castList.name}/>
                <div dangerouslySetInnerHTML={{__html: castList.summary}}></div>
                <div className={style.cast}>
                    {
                        cast.map(man => (
                            <div className="t-person" key={man.person.id}>
                                <p>{man.person.name}</p>
                                <img src={man.person.image.medium} alt={man.person.name}/>
                            </div>
                    ))
                }
                </div>            
            </div>
        )
    }
};

const mapStateToProps = state => ({
    castList: getCast(state),
    isLoading: getIsLoadingShow(state),
    error: getErrorShow(state),
});

const mapDispatchToProps = { showRequest };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowPage);

