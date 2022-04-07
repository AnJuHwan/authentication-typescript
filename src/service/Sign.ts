import axios from 'axios';

export const signUp = async (email: string, password: string, returnSecureToken: boolean) => {
  let body = {
    email: email,
    password: password,
    returnSecureToken: returnSecureToken,
  };
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    body,
  );
  const data = response.data;
  return data;
};
