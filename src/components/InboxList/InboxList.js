import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class InboxList extends Component {
    render() {
        const {dataI, style} = this.props;

        return (
            <>
                {
                    dataI.map(link => (
                        <Link className={style.link} key={link.id} to={`/app/inbox/${link.id}`}>{`${link.body.substring(0, 47)}...`}</Link>
                    ))
                }
            </>
        );
    }
}

export default InboxList;