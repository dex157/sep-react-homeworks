import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import css from './MailList.module.css';

class MailList extends PureComponent {
    render() {
        const { data, path, tcss } = this.props;

        return (
            <div className={`${css.container} ${tcss}`}>
                {data.map(item => {
                    return (
                        <Link className={css.link} key={item.id} to={`${path}/${item.id}`}>
                            {item.body.substr(0, 52)}
                            ...
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default MailList;
