// @flow

import {takeLatest, call, put} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import Actions from '../actions/HomeActions';

import {
  GET_USER_BY_ID,
} from '../actions/Types';

export default () => {
  function* getUserById({payload}) {
    try {
      let results = {
        response: null,
      };
      // result.response = yield call();
      yield put(Actions.getUserByIdSuccess(results));
    } catch (error) {
      yield put(Actions.getUserByIdFailure(error));
    }
  }

  function* watchGetUserById(): Saga<void> {
    yield takeLatest(GET_USER_BY_ID, getUserById);
  }

  return {
    watchGetUserById,
  };
};
