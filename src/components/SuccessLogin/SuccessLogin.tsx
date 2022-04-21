import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../service/Sign';
import { RootState } from '../../store/store';
import { logout } from '../../store/user/userSlice';

const SuccessLogin = () => {
  const navigate = useNavigate();
  const isUser = localStorage.getItem('token');
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

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
    dispatch(logout());
    alert('로그아웃 되었습니다.');
  };

  const removeUserHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem('token');
    const result = await removeUser(isUser!);
    if (result) {
      navigate('/');
      dispatch(logout());
      alert('회원탈퇴 되었습니다.');
    }
  };

  return (
    <div>
      <p>로그인이 성공적으로 되었습니다.</p>
      <p>
        정보 : {user.email} , {user.displayName}
      </p>
      <button onClick={userLogoutHandler}>로그아웃</button>
      <button onClick={removeUserHandler} style={{ marginLeft: 10 }}>
        회원탈퇴
      </button>
      <button onClick={() => navigate('/passwordChange')} style={{ marginLeft: 10 }}>
        비밀번호 변경
      </button>
    </div>
  );
};

export default SuccessLogin;
