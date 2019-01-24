// @flow
import {all, fork} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import authenticationSaga from '../modules/authentication/sagas/authentication.saga';
import homeSaga from '../modules/home/sagas/HomeSaga';

export default function* root(): Saga<void> {
  const createdAuthenticationSaga = authenticationSaga();
  const createdHomeSaga = homeSaga();
  yield all([
    fork(createdAuthenticationSaga.watchGetLoginVerification),
    fork(createdHomeSaga.watchGetUserById),
  ]);
}
