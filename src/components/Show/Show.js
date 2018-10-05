import React, { Component } from 'react';
import { getShowInfo } from '../../api.js';
import './Show.css';

class Show extends Component {
    state = {
        showId: '',
        data: ''
    };
    static getDerivedStateFromProps(nextProps) {
        return { showId: nextProps.showId };
    }
    componentDidUpdate(prevProps) {
        const { showId } = this.state;
        if (showId === prevProps.showId) return false;
        getShowInfo(showId).then(data => {
            this.setState({ data: data });
        });
    }
    render() {
        const { data } = this.state;
        if (data) {
            return (
                <div className="show">
                    <img
                        className="show-image"
                        src={data.image.medium}
                        alt={data.name}
                    />
                    <h2 className="show-label t-show-name">{data.name}</h2>
                    <p className="show-text t-show-genre">
                        <b>Жанр: </b>
                        {data.genres.join(', ')}
                    </p>
                    <p
                        className="show-text t-show-summary"
                        dangerouslySetInnerHTML={{ __html: data.summary }}
                    />
                </div>
            );
        } else {
            return (
                <p className="show-inforation t-show-info">Шоу не выбрано</p>
            );
        }
    }
}

export default Show;
