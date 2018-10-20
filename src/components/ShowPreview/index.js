import React, {Component} from 'react'
import style from './ShowPreview.module.css'
import { Link } from 'react-router-dom'

class ShowPreview extends Component{
    render(){
        const {show} = this.props;

        return (
            <div className={`t-preview ${style.container}`}>
                <div className={style.containerTop}>
                    <Link className="t-link" to={`shows/${show.id}`}>{show.name}</Link>
                    <img src={show.image} alt={show.name}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: show.summary}}>
                </div>
            </div>
        )
    }
};

export default ShowPreview;

