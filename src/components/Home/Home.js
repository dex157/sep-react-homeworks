import React, { Component } from 'react';
import styles from './Home.module.css';

export default class Home extends Component {
    render() {
        return(
            <div className = { styles.container }>
                <p className = "t-greeting">Приветствунем в почтовом клиенте!</p>
            </div>
        );
    }
}