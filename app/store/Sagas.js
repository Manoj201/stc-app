// @flow
import {all, fork} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import homeSaga from '../modules/home/sagas/HomeSaga';

export default function* root(): Saga<void> {
  const createdHomeSaga = homeSaga();
  yield all([
    fork(createdHomeSaga.watchGetUserById),
  ]);
}
