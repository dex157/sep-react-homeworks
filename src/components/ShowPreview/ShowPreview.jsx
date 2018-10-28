import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';

class ShowPreview extends React.Component {
  render() {
    const { id, imageURL, name, description } = this.props;
    return (
      <div className={`${styles.container} t-preview`}>
        <div>
          <Link className="t-link" to={`/shows/${id}`} >{name}</Link>
          {imageURL && <img src={imageURL} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{__html: description}} />
      </div>        
    )
  }  
}

export default ShowPreview;
