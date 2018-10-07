import React, { PureComponent } from 'react';
import cx from 'classnames';
import styles from  './MailList.module.css';
import { Link } from 'react-router-dom';

class MailList extends PureComponent {
    renderLinks() {
        const {list : mailList, target} = this.props;
        return mailList.map(({id, body}) => (
            <Link key={id} className={styles.link} to={`/app/${target}/${id}`}>
                {`${body.substr(0,50)}...`}
            </Link>
        ))
    }

    render() {
        const { target } = this.props;

        return (
            <div className={cx(styles.container, `t-${target}-list`)}>
                {this.renderLinks()}
            </div>
        )
    }
}

export default MailList;
