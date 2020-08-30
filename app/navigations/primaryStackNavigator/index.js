// @flow
import React from 'react';
import {createStackNavigator, NavigationContainer} from 'react-navigation';

import {ROOT_ROUTES, ROOT_NAV_HOME_TAB} from './PrimaryStackNavigation.routes';
import PrimaryStackNavigationService from './PrimaryStackNavigation.service';

const NAV_CONFIG = {
  initialRouteName: ROOT_NAV_HOME_TAB,
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
};

export const PrimaryStackNavigation = createStackNavigator(ROOT_ROUTES, NAV_CONFIG);

const getNewScreenRouteNameDuringTransition = (prevState: any, currentState: any): string | null => {
  let result = null;
  if (prevState && currentState && !prevState.isTransitioning && currentState.isTransitioning) {
    // This means the transition is happening
    const {routes, index} = currentState;
    result = routes[index].routeName;
  }

  return result;
};

type PrimaryStackNavigationProps = {};
type PrimaryStackNavigationState = {};

class PrimaryStackNavigationComponent extends
  React.PureComponent<PrimaryStackNavigationProps, PrimaryStackNavigationState> {

  constructor(props) {
    super(props);
  }

  handleRef = (navigatorRef: NavigationContainer): void => {
    PrimaryStackNavigationService.setPrimaryStackNavigator(navigatorRef);
  };

  handleNavigationStateChange = (prevState, currentState): void => {
    const newScreenRouteName = getNewScreenRouteNameDuringTransition(prevState, currentState);
  };

  render() {
    return (
      <PrimaryStackNavigation
        onNavigationStateChange={this.handleNavigationStateChange}
        ref={this.handleRef}
      />
    );
  }
}

export default PrimaryStackNavigationComponent;
