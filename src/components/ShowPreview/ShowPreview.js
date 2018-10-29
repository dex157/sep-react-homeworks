import React from 'react';
import style from './ShowPreview.module.css';
import { Link } from 'react-router-dom';

const ShowPreview = ({shows}) => {
    if(shows) {
        return (
            <>
                {
                    shows.map((show) => (
                        <div key={show.id} className={`t-preview ${style.container}`}>
                            <div>
                                <Link  className="t-link" to={`/shows/${show.id}`}>{show.name}</Link>
                                {show.image && <img src={show.image.medium}  alt={show.name}/>}
                            </div>
                            <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
                        </div>
                    ))
                }
            </>
        );
    } else {
        return null;
    }
    
};


export default ShowPreview;