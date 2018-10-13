import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
    </div>
  );
};

export default Home;
