import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Link to='/login' style={{ margin: 10 }}>
        로그인
      </Link>
      <Link to='/signup' style={{ margin: 10 }}>
        회원가입
      </Link>
    </div>
  );
};

export default Home;
