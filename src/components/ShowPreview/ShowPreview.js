import React, { PureComponent } from 'react';
import css from './ShowPreview.module.css';
import { Link } from 'react-router-dom';

class ShowPreview extends PureComponent {
    render() {
        const { name, summary, image, id } = this.props.preview;
        console.log(this.props.preview);
        return (
            <div className={`t-preview ${css.container}`}>
                <div>
                    <Link to={`/shows/${id}`} className="t-link">
                        {name}
                    </Link>

                    {image && <img src={image} alt={name} />}
                </div>
                <div dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
        );
    }
}

export default ShowPreview;
