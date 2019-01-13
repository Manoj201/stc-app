import HomeScreen from '../../modules/home/screens/HomeScreen';
import ChildScreen from '../../modules/home/screens/ChildScreen';

export const ROOT_NAV_HOME = 'Home';
export const ROOT_NAV_CHILD = 'Child';

export const ROOT_ROUTES = {
  [ROOT_NAV_HOME]: {
    screen: HomeScreen,
    path: `/${ROOT_NAV_HOME}`,
  },
  [ROOT_NAV_CHILD]: {
    screen: ChildScreen,
    path: `/${ROOT_NAV_CHILD}`,
  },
};
