// @flow

import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_SUCCESS, GET_USER_FEED, GET_USER_FEED_FAILURE, GET_USER_FEED_SUCCESS,
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

const getUserFeed = (payload) => ({
  type: GET_USER_FEED,
  ...payload,
});

const getUserFeedSuccess = (data) => ({
  type: GET_USER_FEED_SUCCESS,
  payload: {data},
});

const getUserFeedFailure = (error) => ({
  type: GET_USER_FEED_FAILURE,
  payload: {error},
});

export default {
  getUserById,
  getUserByIdSuccess,
  getUserByIdFailure,

  getUserFeed,
  getUserFeedSuccess,
  getUserFeedFailure,
};


