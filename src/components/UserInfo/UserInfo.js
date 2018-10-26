import React, { PureComponent } from 'react';
import css from './UserInfo.module.css';
import { getData, getIsLoading } from '../../modules/User';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
    render() {
        const { data, isLoading } = this.props;

        if (isLoading)
            return <p className="t-no-user-info">Данные загружаются...</p>;
        if (!data)
            return (
                <p className="t-no-user-info">Нет информации о пользователе</p>
            );
        const { avatar_url, name, bio } = data;

        return (
            <div className={css.root}>
                <div className={css.imageWrapper}>
                    <img className={css.image} src={avatar_url} alt={name} />
                </div>
                <div>
                    <p className="t-user-name">{name}</p>
                    <p className="t-user-bio">{bio}</p>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    data: getData(state),
    isLoading: getIsLoading(state)
}))(UserInfo);
