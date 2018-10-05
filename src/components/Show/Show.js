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
        console.log(prevProps);
        const { showId } = this.state;

        getShowInfo(this.state.showId).then(data => {
            //console.log(data.image.medium);
            if (showId === prevProps.showId) return false;
            this.setState({ data: data });
        });
        // console.log();
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
