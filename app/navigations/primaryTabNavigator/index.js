// @flow
import {createBottomTabNavigator} from 'react-navigation';

import {TAB_ROUTES, TAB_NAV_HOME} from '../primaryTabNavigator/PrimaryTabNavigation.routes';
import React from 'react';

const NAV_CONFIG = {
  initialRouteName: TAB_NAV_HOME,
  tabBarOptions: {
    activeTintColor: '#802000',
    labelStyle: {
      fontSize: 12,
    },
    showIcon: true,
    showLabel: false,
  },
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

