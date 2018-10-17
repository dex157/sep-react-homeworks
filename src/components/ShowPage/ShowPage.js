import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSeriesRequest} from '../../actionCreators/showAction';
import style from './ShowPage.module.css';

class ShowPage extends Component{

    componentDidMount() {
        const {getSeriesRequest, match} = this.props;
        getSeriesRequest(match.params.id);
    }
    

    render() {

        const { data, isLoading, error} = this.props;
        
        if(isLoading) {
            return <p>Выполняется загрузка</p>
        }

        if(error) {
            return <p>Произошла сетевая ошибка</p>
        }

        return (
            <>
                    <div key={data.id}>
                        <p>{data.name}</p>
                        {data.image && <img src={data.image.medium}  alt={data.name} />}
                        <div dangerouslySetInnerHTML={{__html: data.summary}}></div>
                    </div>
                    <div className={style.cast}>
                        {data._embedded.cast.map(act => (
                            <div className="t-person" key={act.person.name}>
                                <p>{act.person.name}</p>
                                {act.person.image && <img src={act.person.image.medium}  alt={act.person.name} />}
                            </div>
                        ))}
                    </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.shows.data,
    isLoading: state.shows.isLoading,
    error: state.shows.error
});

const mapDispatchToProps = { getSeriesRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ShowPage);