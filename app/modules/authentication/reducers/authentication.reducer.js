// @flow
import {createReducer} from 'reduxsauce';

import {
  GET_LOGIN_VERIFICATION,
  GET_LOGIN_VERIFICATION_SUCCESS,
  GET_LOGIN_VERIFICATION_FAILURE,
} from '../actions/Types';

const INITIAL_STATE = {
  loginIsLoading: false,
  loginData: {},
  loginError: null,
};

export const getLoginVerification = (state = INITIAL_STATE, {payload}: any) => ({
  ...state,
  loginIsLoading: true,
});

export const getLoginVerificationSuccess = (state = INITIAL_STATE, {payload}: any) => ({
  ...state,
  loginIsLoading: false,
});

export const getLoginVerificationFailure = (state = INITIAL_STATE, {payload}: any) => ({
  ...state,
  loginIsLoading: false,
});

const ACTION_HANDLERS = {
  [GET_LOGIN_VERIFICATION]: getLoginVerification,
  [GET_LOGIN_VERIFICATION_SUCCESS]: getLoginVerificationSuccess,
  [GET_LOGIN_VERIFICATION_FAILURE]: getLoginVerificationFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);


