// @flow

import authenticationNavigationService from './AuthenticationNavigation.service';
import {AUTHENTICATION_ROUTES} from './AuthenticationNavigation.routes';

const navigateToChild = () => {
  authenticationNavigationService.navigate(AUTHENTICATION_ROUTES, {});
};

export default {
  navigateToChild,
};
