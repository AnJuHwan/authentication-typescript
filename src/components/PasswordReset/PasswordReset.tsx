import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { userPasswordReset } from '../../service/Sign';
import styles from './PasswordReset.module.css';

const PasswordReset: React.FC = (props) => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const enteredEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const sendPasswordResetEmailHandler = async () => {
    const result = await userPasswordReset(email);
    if (result) {
      alert('전송이 완료되었습니다 이메일을 확인해주세요.');
      navigate('/login');
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor='email'>이메일</label>
      <input type='email' id='email' onChange={enteredEmailHandler} />
      <button onClick={sendPasswordResetEmailHandler}>이메일 보내기</button>
    </div>
  );
};

export default PasswordReset;
