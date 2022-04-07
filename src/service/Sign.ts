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
  } catch (error) {}
};
