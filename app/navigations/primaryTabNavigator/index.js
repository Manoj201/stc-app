// @flow
import {createBottomTabNavigator} from 'react-navigation';

import {TAB_ROUTES, TAB_NAV_HOME} from '../primaryTabNavigator/PrimaryTabNavigation.routes';
import React from 'react';

const NAV_CONFIG = {
  // initialRouteName: TAB_NAV_HOME,
};

export const PrimaryTabBarNavigation = createBottomTabNavigator(TAB_ROUTES, NAV_CONFIG);

type PrimaryTabNavigationProps = {};
type PrimaryTabNavigationState = {};

class PrimaryTabNavigationComponent extends React.PureComponent<PrimaryTabNavigationProps, PrimaryTabNavigationState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PrimaryTabBarNavigation />
    );
  }
}

export default PrimaryTabNavigationComponent;

