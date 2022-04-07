import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP_SUCCESS } from './action';
import { IUserAction } from './reducer';

function* getUserData(action: IUserAction) {
  try {
    yield delay(1000);
    yield put({
      type: SIGNUP_SUCCESS,
    });
  } catch (error) {}
}

export function* getUserDataAPI() {
  yield takeEvery(SIGNUP_SUCCESS, getUserData);
}

export default function* userSage() {
  yield all([fork(getUserDataAPI)]);
}
