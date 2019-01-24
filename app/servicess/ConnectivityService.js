// @flow
// import {NetInfo} from 'react-native';

/**
 * Says whether we are connected to the internet
 * @return {Promise} Promise which resolves to a boolean indicating the network connectivity
 */
export const isConnected = async (): Promise<boolean> => {
  // Apparently the NetInfo.isConnected is buggy in iOS simulator
  // https://github.com/facebook/react-native/issues/8615
  // So I'm sidestepping this check for now

  // const connected = await NetInfo.isConnected.fetch();
  //
  // // If not connected throw an error
  // if (!connected) {
  //   throw new Error('No connection');
  // }
  //
  // return connected;

  return true;
};
