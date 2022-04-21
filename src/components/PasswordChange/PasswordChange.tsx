import React, { useState } from 'react';
import { userPasswordChange } from '../../service/Sign';
import styles from './PasswordChange.module.css';

const PasswordChange = () => {
  const [password, setPassword] = useState<string>('');
  const isUser = localStorage.getItem('token');

  const enteredPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const passwordChangeHandler = async () => {
    const result = await userPasswordChange(isUser!, password);
    if (result) {
      return alert('비밀번호가 변경되었습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor='password'>비밀번호</label>
      <input type='password' id='password' value={password} onChange={enteredPasswordHandler} />
      <button onClick={passwordChangeHandler}>변경하기</button>
    </div>
  );
};

export default PasswordChange;
