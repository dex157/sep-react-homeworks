import React, { PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

function stripHTML(data) {
    return {__html: data};
}

class Show extends PureComponent {
    state = {
        data: null
      };

    componentDidMount() {
        
        const { show } = this.props;
        if (show !== '') {
            getShowInfo(show).then(data =>
                this.setState({ data,
                }),
            );
        }
    }

    render() {
        
        const {data} = this.state;
        
        if(data === null) {
            return <p className="show-inforation t-show-info">Шоу не выбрано</p>
        }
        console.log('key - Component Did Mount, 2 поля в state — showId и data');
        return (
            <div className="show">
            
                <img className="show-image" src={data.image.original} alt={ data.name }></img>
                <h2 className="show-label t-show-name">{data.name}</h2>
                <p className="show-text t-show-genre">
                    <b>Жанр:</b> { data.genres.join(', ') }
                </p>
                <p className="show-text t-show-summary" dangerouslySetInnerHTML={stripHTML(data.summary)} />
                

            </div>
        );
    }
}

export default Show;