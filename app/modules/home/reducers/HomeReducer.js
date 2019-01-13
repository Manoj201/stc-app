// @flow

import {createReducer} from 'reduxsauce';

import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
} from '../actions/Types';

export const INITIAL_STATE = {
  user: {},
  isLoading: false,
  error: null,
};

export const getUserById = (state = INITIAL_STATE, {payload}) => ({
  ...state,
  isLoading: true,
});

export const getUserByIdSuccess = (state = INITIAL_STATE, {payload}) => ({
  ...state,
  user: payload.data.response,
  isLoading: false,
});

export const getUserByIdFailure = (state = INITIAL_STATE, {payload}) => ({
  ...state,
  error: payload.error,
  isLoading: false,
});

const ACTION_HANDLERS = {
  [GET_USER_BY_ID]: getUserById,
  [GET_USER_BY_ID_SUCCESS]: getUserByIdSuccess,
  [GET_USER_BY_ID_FAILURE]: getUserByIdFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);


