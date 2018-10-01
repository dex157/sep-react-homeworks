import React, { PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api.js';

class Show extends PureComponent {
    state = {
        showId: '',
        data: {}
    }

    componentDidUpdate = (prevProp, prevState) => {
        const { showId } = this.props;

        if (prevProp !== prevState) {
            getShowInfo(showId).then(data => {
                this.setState({
                    showId: showId,
                    data: data
                })
            });
        }
    }

    render () {
        const {data} = this.state;

        if(this.state.showId !== '') {
            return(
                <div className = "show">
                    <img 
                        className = "show-image"
                        src = {data.image.original}
                        alt = {data.name}
                    />
                    <h2 className = "show-label t-show-name">{data.name}</h2>
                    <p className = "show-text t-show-genre">
                        <b>Жанр: </b>
                        {data.genres.join(', ')}
                    </p>
                    <p 
                        className = "show-text t-show-summary"
                        dangerouslySetInnerHTML = {{ __html: data.summary}}
                    >
                    </p>
                </div>
            )
        } else {
            return <p className = "show-inforation t-show-info">Шоу не выбрано</p>
        }
    }
}

export default Show;