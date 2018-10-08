import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class OutboxList extends Component {

    render() {
        const {dataO, style} = this.props;
        return (
            <>
                {
                    dataO.map(link => (
                        <Link className={style.link} key={link.id} to={`/app/outbox/${link.id}`}>{`${link.body.substring(0, 47)}...`}</Link>
                    ))
                }
            </>
        );
    }
}

export default OutboxList;