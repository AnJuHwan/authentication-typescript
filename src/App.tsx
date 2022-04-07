import React from 'react';
import styles from './App.module.css';
import { Link } from 'react-router-dom';
function App() {
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
}

export default App;
