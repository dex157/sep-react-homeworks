import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';

const ShowPreview = ({ match, show }) => {
  
  return (
    <div className={`t-preview ${styles.container}`}>
      <div>
        <Link
          to={`${match.url}shows/${show.id}`}
          className="t-link"
        >
          {show.name}
        </Link>
        {show.image && <img src={show.image.medium} alt={show.name}/>}
      </div>
      <div dangerouslySetInnerHTML={{__html: show.summary}} />
    </div>
  )
}

export default ShowPreview;