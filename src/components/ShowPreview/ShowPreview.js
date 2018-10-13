import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';
import cx from 'classnames';

export default ({ name, id, image, summary }) => {
  return (
    <div className={cx(styles.container, 't-preview')}>
      <div className={styles.containerTop}>
        <Link className="t-link" to={`/show/${id}`}>
          {name}
        </Link>
        {image && <img src={image} alt={name} />}
      </div>
      <div className={styles.containerTop}>
        {summary && <div dangerouslySetInnerHTML={{ __html: summary }} />}
      </div>
    </div>
  );
};