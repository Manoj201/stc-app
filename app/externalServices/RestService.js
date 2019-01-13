// @flow
import Config from 'react-native-config';

// import {sessionActions} from '../storage/realm';
import {isConnected} from '../services/ConnectivityService';

/**
 * API Base URL
 * @type {string}
 */
const BASE_URL: string = `${Config.API_BASE_URL}/${Config.API_REST_PREFIX}`;

/**
 * Default request headers
 * @type {Object}
 */
const defaultRequestHeaders: {[string]: string} = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

/**
 * Create URL params from given key value pairs
 * @param  {object} params Key value pairs to be converted to URL params
 * @return {string}        Converted URL params string
 */
const createURLParams = (params: {[string]: any}): string => {
  let convertedParams = '';

  // Add params to URL if there are any
  if (params) {
    Object.keys(params).forEach((key, index) => {
      convertedParams += `${index === 0 ? '?' : '&'}${key}=${params[key]}`;
    });
  }

  return convertedParams;
};

/**
 * FETCH API doesn't automatically throw an error in case of failed reponse status.
 * We have to handle it ourselves. We handle it by looking at the response code.
 * @param  {Response} response API response
 * @return {Response}          The response is returned if there is no errors thrown
 * @throws {Error}             Throws error if response status is not OK
 */
const handleResponseStatus = async (response) => {
  if (response && response.status < 200 || response.status >= 300) {
    const error: any = new Error(response.statusText);
    error.response = await response.json();

    throw error;
  }

  return response.json();
};

/**
 * Builds auth header from the current session
 * @return  {Object}   The created authorization header field
 */
// export const buildAuthorizationHeader = (): {Authorization: string} => {
//   const session = sessionActions.getSession();
//
//   if (!session) {
//     throw new Error('Session not available');
//   }
//
//   const {token} = session;
//
//   return {
//     Authorization: `Bearer ${token}`,
//   };
// };

/**
 * Make GET request
 * @param  {string} endpoint The endpoint to call
 * @param  {object} params   URL params object
 * @param  {object} headers  Headers object
 * @return {Promise}         GET request promise
 */
export const GET = async (endpoint: string, params: {[string]: any}, headers: {[string]: any}): Promise<any> => {
  // Wait for connection
  await isConnected();

  // Create the request URL
  const url: string = `${BASE_URL}/${endpoint}${createURLParams(params)}`;
  const options: {[string]: any} = {
    headers: {
      // Spread the default request headers
      ...defaultRequestHeaders,

      // Spread the given additional headers
      ...headers,
    },
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};

/**
 * Make POST request
 * @param  {string} endpoint The endpoint to call
 * @param  {object} body     POST body
 * @param  {object} params   URL params
 * @param  {object} headers  Headers object
 * @return {Promise}         POST request promise
 */
export const POST = async (
  endpoint: string, body: {[string]: any}, params: {[string]: any}, headers: {[string]: any}
): Promise<any> => {
  // Wait for connection
  await isConnected();

  // Create the request URL
  const url: string = `${BASE_URL}/${endpoint}${createURLParams(params)}`;
  const options: {[string]: any} = {
    // Request type
    method: 'POST',

    // Add headers
    headers: {
      // Spread the default request headers
      ...defaultRequestHeaders,

      // Spread the given additional headers
      ...headers,
    },

    // Append the requestbody
    body: JSON.stringify(body || {}),
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};

/**
 * Make PUT request
 * @param  {string} endpoint The endpoint to call
 * @param  {object} body     PUT body
 * @param  {object} params   URL params
 * @param  {object} headers  Headers object
 * @return {Promise}         PUT request promise
 */
export const PUT = async (
  endpoint: string, body: {[string]: any}, params: {[string]: any}, headers: {[string]: any}
): Promise<any> => {
  // Wait for connection
  await isConnected();
  // Create the request URL
  const url: string = `${BASE_URL}/${endpoint}${createURLParams(params)}`;
  const options: {[string]: any} = {
    // Request type
    method: 'PUT',

    // Add headers
    headers: {
      // Spread the default request headers
      ...defaultRequestHeaders,

      // Spread the given additional headers
      ...headers,
    },

    // Append the requestbody
    body: JSON.stringify(body || {}),
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};

/**
 * Make PATCH request
 * @param  {string} endpoint The endpoint to call
 * @param  {object} body     PATCH body
 * @param  {object} params   URL params
 * @param  {object} headers  Headers object
 * @return {Promise}         PUT request promise
 */
export const PATCH = async (
  endpoint: string, body: {[string]: any}, params: {[string]: any}, headers: {[string]: any}
): Promise<any> => {
  // Wait for connection
  await isConnected();

  // Create the request URL
  const url: string = `${BASE_URL}/${endpoint}${createURLParams(params)}`;
  const options: {[string]: any} = {
    // Request type
    method: 'PATCH',

    // Add headers
    headers: {
      // Spread the default request headers
      ...defaultRequestHeaders,

      // Spread the given additional headers
      ...headers,
    },

    // Append the requestbody
    body: JSON.stringify(body || {}),
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};

/**
 * Make DELETE request
 * @param  {string} endpoint The endpoint to call
 * @param  {object} body     PUT body
 * @param  {object} params   URL params
 * @param  {object} headers  Headers object
 * @return {Promise}         PUT request promise
 */
export const DELETE = async (
  endpoint: string, body: {[string]: any}, params: {[string]: any}, headers: {[string]: any}
): Promise<any> => {
  // Wait for connection
  await isConnected();

  // Create the request URL
  const url: string = `${BASE_URL}/${endpoint}${createURLParams(params)}`;
  const options: {[string]: any} = {
    // Request type
    method: 'DELETE',

    // Add headers
    headers: {
      // Spread the default request headers
      ...defaultRequestHeaders,

      // Spread the given additional headers
      ...headers,
    },

    // Append the requestbody
    body: JSON.stringify(body || {}),
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};
