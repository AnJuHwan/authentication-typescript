import React from 'react';
import styles from './Signup.module.css';

const Signup: React.FC = (props) => {
  return (
    <div>
      <p className={styles.signup}>회원가입</p>
      <form className={styles.form}>
        <label htmlFor='email'>이메일</label>
        <input type='text' id='email' />
        <label htmlFor='password'>비밀번호</label>
        <input type='password' />
        <label htmlFor='password'>비밀번호 확인</label>
        <input type='password' />
        <button>가입하기</button>
        <button>로그인으로 가기</button>
      </form>
    </div>
  );
};

export default Signup;
