import React, {Component} from 'react';
import styles from './ShowPreview.module.css';
import {Link} from 'react-router-dom';

class ShowPreview extends Component {
  render() {
    const {name, id, summary, image} = this.props;

    return (
      <div className = {styles.container + ' t-preview'}>
        <div>
            <Link className = "t-link" to = {`/shows/${id}`}>{name}</Link>
            {image && <img
                src = {image}
                alt = {name}
            />}
        </div>
        <div dangerouslySetInnerHTML = {{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
