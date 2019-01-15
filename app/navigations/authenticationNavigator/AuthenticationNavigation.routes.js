import LoginScreen from '../../modules/authentication/screens/LoginScreen';
import ChildScreen from '../../modules/home/screens/ChildScreen';

export const ROOT_NAV_LOGIN = 'Login';
export const ROOT_NAV_CHILD = 'Child';

export const AUTHENTICATION_ROUTES = {
  [ROOT_NAV_LOGIN]: {
    screen: LoginScreen,
    path: `/${ROOT_NAV_LOGIN}`,
  },
  [ROOT_NAV_CHILD]: {
    screen: ChildScreen,
    path: `/${ROOT_NAV_CHILD}`,
  },
};
