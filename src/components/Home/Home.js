import React, { Component } from 'react';
import style from './Home.module.css';

class Home extends Component {
  render() {
    return (
      <div className={style.container}>
        <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
      </div>
    );
  }
}
export default Home;
