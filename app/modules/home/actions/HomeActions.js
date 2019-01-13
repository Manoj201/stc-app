// @flow

import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_SUCCESS,
} from './Types';

const getUserById = (id) => ({
  type: GET_USER_BY_ID,
  id,
});

const getUserByIdSuccess = (data) => ({
  type: GET_USER_BY_ID_SUCCESS,
  payload: {data},
});

const getUserByIdFailure = (error) => ({
  type: GET_USER_BY_ID_FAILURE,
  payload: {error},
});

export default {
  getUserById,
  getUserByIdSuccess,
  getUserByIdFailure,
};


