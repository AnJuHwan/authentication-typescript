import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <p className={styles.signup}>로그인</p>
      <form className={styles.form}>
        <label htmlFor='email'>이메일</label>
        <input type='text' id='email' />
        <label htmlFor='password'>비밀번호</label>
        <input type='password' />

        <button>로그인하기</button>
        <button>회원가입 하러 가기</button>
      </form>
    </div>
  );
};

export default Login;
