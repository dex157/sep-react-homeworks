import React, { Component } from 'react';
import { getShowInfo } from '../../api';
import './Show.css'

class Show extends Component {
    state = {
        showId: null,
        data: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {...prevState, showId: nextProps.showId};
    }

    componentDidUpdate(prevProps, prevState) {
        const { showId } = this.props;

        if(showId !== prevProps.showId) {
            getShowInfo(showId)
                .then(response => {
                    this.setState({data: response});
                });
        }
    }

    render() {
        const { data } = this.state;

        return ( data 
            ? <div className={'show'}>
                    <img
                        className="show-image"
                        src={data.image.original}
                        alt={data.name}
                    />
                    <h2 className={'t-show-name'}>{data.name}</h2>
                    <p className={'t-show-genre'}>
                        <b>Жанр: </b>
                        {data.genres.join(', ')}
                    </p>
                    <p className={'t-show-summary'} dangerouslySetInnerHTML={{ __html: data.summary }} />
                </div>
            : <p class="show-inforation t-show-info">Шоу не выбрано</p>
        )
    }
}

export default Show
