import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../reducers/shows';
import Actor from '../Actor';
import styles from './ShowPage.module.css';

const showById = state => showId => {
    
    const { shows: {entities} } = state;

    const findedShow = entities.find((element) => {
        return element.id === parseInt(showId);
    });

    if (findedShow) {
        return findedShow;
    } else {
        return null;
    }
}

class ShowPage extends Component {
    render(){
        const  { match: {params: {id}}, showById, showRequest, isFetching, error } = this.props;
               
        if (isFetching) return <p>Loading >>></p>
        if (error) return <p>{ error }</p>

        if (!showById(id)){
            showRequest(id);
            return (<p>Loading...</p>);
        } else {
            const {name, image, _embedded: {cast}, summary} = showById(id);

            return (
                <div>
                    <p>{ name }</p>
                    { image && <img src = { image.medium } alt = { name } /> }
                    <div dangerouslySetInnerHTML = {{__html: summary}} />
                    <div className = { styles.cast }>
                        { cast.map( row =>
                            <Actor row = { row } />
                        ) }
                    </div>
                </div>
            );
        }
    }
}

const Container = connect(
    (state) => {
        const props = {
            isFetching: state.shows.isFetching,
            showById: showById(state),
            error: state.shows.error,
        };

        return props;
    },
    {
        showRequest
    }
)(ShowPage);

export default Container;