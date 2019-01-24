// @flow
import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import type {
  Saga,
} from 'redux-saga';

import Actions from '../actions/authentication.actions';
import AuthenticationService from '../../../externalServices/Authentication.service';
import {
  GET_LOGIN_VERIFICATION,
} from '../actions/Types';

export default () => {
  function* getLoginVerification(action) {
    try {
      const response = yield call(
        AuthenticationService.getLoginVerification,
        action.payload.username,
        action.payload.password,
      );
      console.log(response);
      yield put(Actions.getLoginVerificationSuccess(response));
    } catch (error) {
      yield put(Actions.getLoginVerificationFailure(error));
    }
  }

  function* watchGetLoginVerification(): Saga<void> {
    yield takeLatest(GET_LOGIN_VERIFICATION, getLoginVerification);
  }

  return {
    watchGetLoginVerification,
  };
};
