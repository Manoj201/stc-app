// @flow
import {AsyncStorage} from 'react-native';


const asyncStorageService = {
  storeAsyncData: async (key, data) => {
    await AsyncStorage.setItem(key, data);
  },

  getAsyncData: async (key) => {
    return await AsyncStorage.getItem(key);
  },
};

export default asyncStorageService;
