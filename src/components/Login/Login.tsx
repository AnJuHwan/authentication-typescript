import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.signup}>로그인</p>
      <form className={styles.form}>
        <label htmlFor='email'>이메일</label>
        <input type='text' id='email' />
        <label htmlFor='password'>비밀번호</label>
        <input type='password' />
        <button>로그인하기</button>
        <button onClick={() => navigate('/signup')}>회원가입 하러 가기</button>
      </form>
    </div>
  );
};

export default Login;
