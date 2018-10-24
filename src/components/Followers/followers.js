import React, { PureComponent } from 'react';
import css from './followers.module.css';
import { getData, getIsLoading } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
    render() {
        const { data, isLoading } = this.props;

        if (isLoading)
            return <p className="t-no-user-info">Данные загружаются...</p>;
        if (!data)
            return (
                <p className="t-no-user-info">Нет информации о пользователе</p>
            );

        return (
            <div className={cx(css.root, 't-followers')}>
                {data.map(item => {
                    return (
                        <div className={css.follower} key={item.id}>
                            <img
                                className={css.followerImg}
                                src={item.avatar_url}
                                alt={item.login}
                            />
                            <p className={css.followerLogin}>{item.login}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default connect(state => ({
    data: getData(state),
    isLoading: getIsLoading(state)
}))(Followers);
