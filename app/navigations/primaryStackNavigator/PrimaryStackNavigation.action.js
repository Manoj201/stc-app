// @flow

import primaryStackNavigationService from '../primaryStackNavigator/PrimaryStackNavigation.service';
import {ROOT_NAV_CHILD} from '../primaryStackNavigator/PrimaryStackNavigation.routes';

const navigateToChild = () => {
  primaryStackNavigationService.navigate(ROOT_NAV_CHILD, {});
};


export default {
  navigateToChild,
};
