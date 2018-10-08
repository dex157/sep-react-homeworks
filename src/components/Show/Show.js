import React, { Component } from 'react';
import { getShowInfo } from '../../api';
import './Show.css'

class Show extends Component {
    state = {
        showId: null,
        data: null
    }

    componentDidMount() {
        const { showId } = this.props;

        if(showId !== '') {
            getShowInfo(showId)
                .then(data => {
                    this.setState({data});
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
            : <p className="show-inforation t-show-info">Шоу не выбрано</p>
        )
    }
}

export default Show
