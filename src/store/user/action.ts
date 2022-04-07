import { ISignUp } from '../../interface/Sign';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const signUpSuccess = (userData: ISignUp) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: userData,
  };
};
