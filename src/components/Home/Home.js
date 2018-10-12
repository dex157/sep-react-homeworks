import React, { PureComponent } from 'react';
import css from './Home.module.css';

class Home extends PureComponent {
    render() {
        return (
            <div className={css.container}>
                <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
            </div>
        );
    }
}

export default Home;
