import LoginScreen from '../../modules/authentication/screens/LoginScreen';

export const ROOT_NAV_LOGIN = 'Login';

export const AUTHENTICATION_ROUTES = {
  [ROOT_NAV_LOGIN]: {
    screen: LoginScreen,
    path: `/${ROOT_NAV_LOGIN}`,
  },
};
