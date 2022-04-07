import React from 'react';
import Signup from './components/Signup/Signup';
import styles from './App.module.css';
import { Link, useNavigate } from 'react-router-dom';
function App() {
  return (
    <div className={styles.container}>
      <Link to='/login'>로그인</Link>
      <Link to='/signup'>회원가입</Link>
    </div>
  );
}

export default App;
