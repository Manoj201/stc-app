// @flow
import React from 'react';
import {createStackNavigator, NavigationContainer} from 'react-navigation';

import {AUTHENTICATION_ROUTES, ROOT_NAV_LOGIN} from './AuthenticationNavigation.routes';
import AuthenticationNavigationService from './AuthenticationNavigation.service';

const NAV_CONFIG = {
  initialRouteName: ROOT_NAV_LOGIN,
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
};

export const AuthenticationNavigation = createStackNavigator(AUTHENTICATION_ROUTES, NAV_CONFIG);

const getNewScreenRouteNameDuringTransition = (prevState: any, currentState: any): string | null => {
  let result = null;
  if (prevState && currentState && !prevState.isTransitioning && currentState.isTransitioning) {
    // This means the transition is happening
    const {routes, index} = currentState;
    result = routes[index].routeName;
  }

  return result;
};

type AuthenticationNavigationProps = {};
type AuthenticationNavigationState = {};

class AuthenticationNavigationComponent extends
  React.PureComponent<AuthenticationNavigationProps, AuthenticationNavigationState> {

  constructor(props) {
    super(props);
  }

  handleRef = (navigatorRef: NavigationContainer): void => {
    AuthenticationNavigationService.setAuthenticationNavigator(navigatorRef);
  };

  handleNavigationStateChange = (prevState, currentState): void => {
    const newScreenRouteName = getNewScreenRouteNameDuringTransition(prevState, currentState);
  };

  render() {
    return (
      <AuthenticationNavigation
        onNavigationStateChange={this.handleNavigationStateChange}
        ref={this.handleRef}
      />
    );
  }
}

export default AuthenticationNavigationComponent;
