import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ISignUp } from '../../interface/Sign';
import { signUp, updateUser } from '../../service/Sign';
import { RootState } from '../../store/store';
import { login } from '../../store/user/userSlice';
import styles from './Signup.module.css';

const Signup: React.FC = (props) => {
  const [email, setEmail] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const signupHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const check = /[`~!@#$%^&*|\\\'\";:\/?]/gi; // 특수문자 체크
    if (email.trim().length === 0) {
      return alert('이메일을 입력해주세요.');
    }

    if (nickName.trim().length === 0) {
      return alert('닉네임을 입력해주세요.');
    }

    if (password.trim().length === 0) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    if (check.test(password) === true) {
      alert('특수문자를 제거해주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
    }

    try {
      const getSignupData: ISignUp = await signUp(email, password, true);
      const updateUserData = await updateUser(getSignupData.idToken, nickName, '');
      dispatch(login(updateUserData));
      if (getSignupData) {
        localStorage.setItem('token', getSignupData.idToken);
        navigate('/successLogin');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const enteredEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const enteredPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const enteredPasswordConfirmHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.currentTarget.value);
  };
  const enteredNickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.signup}>회원가입</p>
      <form className={styles.form}>
        <label htmlFor='email'>이메일</label>
        <input type='text' id='email' value={email} onChange={enteredEmailHandler} />
        <label htmlFor='nickname'>닉네임</label>
        <input type='text' id='nickname' value={nickName} onChange={enteredNickNameHandler} />
        <label htmlFor='password'>비밀번호</label>
        <input type='password' value={password} onChange={enteredPasswordHandler} />
        <label htmlFor='password'>비밀번호 확인</label>
        <input type='password' value={passwordConfirm} onChange={enteredPasswordConfirmHandler} />
        <button onClick={signupHandler}>가입하기</button>
        <button onClick={() => navigate('/login')}>로그인으로 가기</button>
      </form>
    </div>
  );
};

export default Signup;
