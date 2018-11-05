import React, {Component} from 'react';
import {getShowInfo} from 'api.js';

import './Show.css'

export default class Show extends Component {

    state = {
        showId: '',
        data: null
    }

    componentDidUpdate(prevProps) {
        const {showId} = this.props;

        if (showId !== '' && prevProps.showId !== showId) {
            getShowInfo(showId)
                .then((response) => {

                    this.setState({
                        data: response
                    })
                })
        }
    }

    render () {

        const {data} = this.state;

        if (data === null) {
            return <p className="show-inforation t-show-info">Шоу не выбрано</p>

        } else {
            return (
                <div className="show">
                    <img src={data.image.medium} alt="show" className="show-image"/>
                    <h2 className="show-label t-show-name">{data.name}</h2>
                    <p className="show-text t-show-genre"><b>Жанр: </b>{data.genres.join(', ')}</p>
                    <p className="show-text t-show-summary" dangerouslySetInnerHTML={{__html: data.summary}} ></p>
                </div>
            )
        }
    }
}