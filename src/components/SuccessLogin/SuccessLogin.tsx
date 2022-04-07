import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const SuccessLogin = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  return (
    <div>
      <p>로그인이 성공적으로 되었습니다.</p>
      <p>정보 : {user.email}</p>
    </div>
  );
};

export default SuccessLogin;
