import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';
import cls from 'classnames';

class ShowPreview extends PureComponent {
  render() {
    const { id, name, image, summary } = this.props;

    return (
      <div className={cls('t-preview ', styles.container)}>
        <div className={styles.containerTop}>
          <Link to={`/shows/${id}`} className="t-link">
            {name}
          </Link>

          {image ? (
            <img
              src={image.medium ? image.medium : image.original}
              alt={name}
            />
          ) : null}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
