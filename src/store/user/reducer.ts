import { ISignUp } from '../../interface/Sign';
import { SIGNUP_SUCCESS } from './action';

export interface IUserAction {
  type: string;
  payload: ISignUp;
}

const initState: ISignUp = {
  kind: '',
  idToken: '',
  email: '',
  refreshToken: '',
  expiresIn: '',
  localId: '',
};

const userReducer = (state = initState, action: IUserAction) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        kind: action.payload.kind,
        idToken: action.payload.idToken,
        email: action.payload.email,
        refreshToken: action.payload.refreshToken,
        expiresIn: action.payload.expiresIn,
        localId: action.payload.localId,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
