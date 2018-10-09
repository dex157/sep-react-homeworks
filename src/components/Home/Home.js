import React from 'react';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
    </div>
  );
};

export default Home;
