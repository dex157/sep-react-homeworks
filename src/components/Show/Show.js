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

        console.log(this.props);
        const { show } = this.props;
        if (show !== '') {
            getShowInfo(show).then(data =>
                this.setState({ data }),
            );
        }
    }

    render() {
        
        const {data} = this.state;

        if(data === null) {
            return <p>Шоу не выбрано</p>
        }
        console.log(data);
        return (
            <div className="show">
            
                <img className="show-image" src={data.image.original} alt={ data.name }></img>
                <h2 className="show-label t-show-name">{data.name}</h2>
                <p className="show-text t-show-jenre">
                    <b>Жанр:&nbsp;</b>{ data.genres }
                </p>
                <p className="show-text t-show-summary">
                    <div dangerouslySetInnerHTML={stripHTML(data.summary)} />
                </p>

            </div>
        );
    }
}

export default Show;