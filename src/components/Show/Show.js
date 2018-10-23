import React, { PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

function stripHTML(data) {
    return {__html: data};
}

class Show extends PureComponent {
    state = {
        showId: '',
        data: null
      };

    componentDidMount() {
        const  { showId }  = this.props ;
        
        if (showId !== '') {
            getShowInfo(showId).then(data =>
                this.setState({ 
                    showId: showId,
                    data
                }),
            );
        } 
    }

    render() {
        
        const { data,  showId } = this.state;
        console.log(showId);
        if(showId !== '') {
        
            return (
                <div className="show">
                
                    <img className="show-image" src={ data.image.original } alt={ data.name }></img>
                    <h2 className="show-label t-show-name">{ data.name }</h2>
                    <p className="show-text t-show-genre">
                        <b>Жанр:</b> { data.genres.join(', ') }
                    </p>
                    <p className="show-text t-show-summary" dangerouslySetInnerHTML={ stripHTML(data.summary) } />
                    

                </div>
            );
        } else {
            return <p className="show-inforation t-show-info">Шоу не выбрано</p>
        } 
    }
}

export default Show;