import React, { Component } from 'react';
import styles from './ShowPreview.module.css';
import { NavLink } from 'react-router-dom';

class ShowPreview extends Component {
    render() {
        const { name, id, summary, image } = this.props.element;

        return (
            <div className={styles.container + ' t-preview'}>
                <div>
                    <NavLink to={`/shows/${id}`} className='t-link'>
                        {name}
                    </NavLink>
                    { image 
                        ? <img src={image.medium} alt={name} />
                        : null 
                    }
                </div>
                <div dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
        );
    }
}

export default ShowPreview;