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
        if(this.state.showId !== '') {
            return(
                <div className = "show">
                    <img 
                        className = "show-image"
                        src = {this.state.data.image.original}
                        alt = {this.state.data.name}
                    />
                    <h2 className = "show-label t-show-name">{this.state.data.name}</h2>
                    <p className = "show-text t-show-genre">
                        <b>Жанр: </b>
                        {this.state.data.genres.join(', ')}
                    </p>
                    <p 
                        className = "show-text t-show-summary"
                        dangerouslySetInnerHTML = {{ __html: this.state.data.summary}}
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