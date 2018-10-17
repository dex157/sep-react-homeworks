import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';
import cx from 'classnames';

const ShowPreview = ({ id, name, image, summary }) => (
  <div className={cx(styles.container, 't-preview')}>
    <div>
      <Link className="t-link" to={`/shows/${id}`}>
        {name}
      </Link>
      {image && <img src={image.medium} alt={name} />}
    </div>
    <div dangerouslySetInnerHTML={{ __html: summary }} />
  </div>
);

export default ShowPreview;
