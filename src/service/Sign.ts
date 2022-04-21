import axios from 'axios';

export const signUp = async (email: string, password: string, returnSecureToken: boolean) => {
  let body = {
    email: email,
    password: password,
    returnSecureToken: returnSecureToken,
  };
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      body,
    );
    const data = await response.data;

    return data;
  } catch (error) {
    alert('이미 가입된 아이디가 있습니다.');
  }
};

export const updateUser = async (idToken: string, displayName: string, photoUrl: string) => {
  let body = {
    idToken,
    displayName,
    photoUrl,
    deleteAttribute: [],
    returnSecureToken: false,
  };
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      body,
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (email: string, password: string) => {
  let body = {
    email,
    password,
    returnSecureToken: false,
  };
  try {
    const resposne = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      body,
    );
    const data = await resposne.data;
    return data;
  } catch (error) {
    alert('아이디 , 비밀번호를 확인해주세요.');
  }
};

export const removeUser = async (token: string) => {
  let body = {
    idToken: token,
  };
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      body,
    );
    const data = await response.data;
    return data;
  } catch (error) {
    alert('서버 에러입니다.');
  }
};

export const userPasswordReset = async (email: string) => {
  let body = {
    requestType: 'PASSWORD_RESET',
    email,
  };
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      body,
    );
    const data = await response.data;
    return data;
  } catch (error) {
    alert('서버 에러입니다.');
  }
};

export const userPasswordChange = async (token: string, password: string) => {
  let body = {
    idToken: token,
    password,
    returnSecureToken: false,
  };
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      body,
    );
    const data = await response.data;
    return data;
  } catch (error) {
    alert('서버 에러입니다.');
  }
};
