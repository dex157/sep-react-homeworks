import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './ShowPreview.module.css';

class ShowPreview extends Component {
  render() {
    const { image, name, id, summary } = this.props;

    return (
      <div className={classNames('t-preview', styles.container)}>
        <div>
          <Link className='t-link' to={`/shows/${id}`}>{name}</Link>
          {image && <img src={image.medium} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
