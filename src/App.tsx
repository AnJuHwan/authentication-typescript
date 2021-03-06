import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import SuccessLogin from './components/SuccessLogin/SuccessLogin';
import Home from './components/Home/Home';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store/user/userSlice';
import { RootState } from './store/store';
import PasswordReset from './components/PasswordReset/PasswordReset';
import PasswordChange from './components/PasswordChange/PasswordChange';
function App() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const localToken = localStorage.getItem('token');
    let body = {
      idToken: localToken,
    };
    if (localToken) {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        body,
      );
      const data = await response.data;
      if (data) {
        dispatch(login(data.users[0]));
      } else {
        dispatch(logout());
      }
      return data;
    }
  };

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/successLogin' element={<SuccessLogin />} />
      <Route path='/passwordReset' element={<PasswordReset />} />
      <Route path='/passwordChange' element={<PasswordChange />} />
    </Routes>
  );
}

export default App;
