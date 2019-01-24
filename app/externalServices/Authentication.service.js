// @flow
import {POST} from './RestService';

const urlFactory = {
  login: (): string => 'login',
};

const authenticationService = {
  getLoginVerification: async (username: string, password: string): Promise<any> => {
    const endpoint: string = urlFactory.login();
    const body: {username: string, password: string} = {userName: username, password};
    const urlParams = null;
    const headers = null;

    return POST(endpoint, body, urlParams, headers);
  },
};

export default authenticationService;
