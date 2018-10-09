import React, { Component } from 'react';
import { getShowInfo } from '../../api';
import './Show.css';

class Show extends Component {
    state = {
        showId: null,
        data: null
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.showId !== prevState.showId) {
            return {
                showId: nextProps.showId,
                data: null
            };
        } else {
            return null;
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { showId, data } = this.state;

        if (data === null) {
            getShowInfo(showId).then(data => {
                this.setState({ data: data });
            })
        }
    }

    renderPoster = (data) => {
        const { image, name, genres, summary } = data;

        return (
            <div className='show'>
                <img 
                    className='show-image' 
                    src={image.medium} 
                    alt={name} />
                <h2 className="show-label t-show-name">
                    {name} 
                </h2>
                <p className="show-text t-show-genre">
                    <b>Жанр: </b>
                    {genres.join(', ')}
                </p>
                <p 
                    className="show-text t-show-summary" 
                    dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
        )
    }

    render() {
        const { data } = this.state;

        return(
            data ? (
                this.renderPoster(data)
            ) : (
                <p className="show-inforation t-show-info">
                    Шоу не выбрано
                </p>
            )
        );
    }
}

export default Show;
