import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../service/Sign';
import { RootState } from '../../store/store';
import { login } from '../../store/user/userSlice';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const userLoginHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const loginUser = await userLogin(email, password);
      dispatch(login(loginUser));
      localStorage.setItem('token', loginUser.idToken);
      navigate('/successLogin');
    } catch (error) {
      console.log('로그인 실패');
    }
  };

  const enteredEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const enteredPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.signup}>로그인</p>
      <form className={styles.form}>
        <label htmlFor='email'>이메일</label>
        <input type='text' id='email' onChange={enteredEmailHandler} />
        <label htmlFor='password'>비밀번호</label>
        <input type='password' onChange={enteredPasswordHandler} />
        <button onClick={userLoginHandler}>로그인하기</button>
        <button onClick={() => navigate('/signup')}>회원가입 하러 가기</button>
      </form>
    </div>
  );
};

export default Login;
