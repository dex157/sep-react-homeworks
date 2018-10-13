import React, { PureComponent } from 'react';
import styles from './ShowPreview.module.css';
import { NavLink } from 'react-router-dom';

class ShowPreview extends PureComponent {
  render() {
    const { name, id, summary, image } = this.props;

    return (
      <div className={'t-preview ' + styles.container}>
        <div>
          <NavLink to={`/shows/${id}`} className="t-link">
            {name}
          </NavLink>
          {/* <a className="t-link" href={`/shows/${id}`}>
            {name}
          </a> */}
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
