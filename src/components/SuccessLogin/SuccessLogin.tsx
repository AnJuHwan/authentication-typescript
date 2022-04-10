import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';

const SuccessLogin = () => {
  const navigate = useNavigate();
  const isUser = localStorage.getItem('token');
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  useEffect(() => {
    if (!isUser) {
      navigate('/');
      alert('로그인 후 이용해주세요.');
    }
  }, []);

  const userLogoutHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/');
    alert('로그아웃 되었습니다.');
  };

  return (
    <div>
      <p>로그인이 성공적으로 되었습니다.</p>
      <p>정보 : {user.email}</p>
      <button onClick={userLogoutHandler}>로그아웃</button>
    </div>
  );
};

export default SuccessLogin;
