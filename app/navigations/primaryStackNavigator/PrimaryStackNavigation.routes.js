import ChildScreen from '../../modules/home/screens/ChildScreen';
import PrimaryTabNavigator from '../../navigations/primaryTabNavigator';

export const ROOT_NAV_HOME_TAB = 'PrimaryTabNavigator';
export const ROOT_NAV_CHILD = 'Child';

export const ROOT_ROUTES = {
  [ROOT_NAV_HOME_TAB]: {
    screen: PrimaryTabNavigator,
    path: `/${ROOT_NAV_HOME_TAB}`,
  },
  [ROOT_NAV_CHILD]: {
    screen: ChildScreen,
    path: `/${ROOT_NAV_CHILD}`,
  },
};
