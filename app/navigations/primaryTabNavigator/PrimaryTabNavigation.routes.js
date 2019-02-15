// @flow
import React from 'react';

import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
import Icon from '../../shared/components/icon/icon.component';

export const TAB_NAV_HOME = 'TabOne';
export const TAB_NAV_CHILD = 'TabTwo';
export const TAB_NAV_THREE = 'TabThree';

export const TAB_ROUTES = {
  [TAB_NAV_HOME]: {
    screen: TabOne,
    path: `/${TAB_NAV_HOME}`,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => renderTabIcon(tintColor, 'home'),
    },
  },
  [TAB_NAV_CHILD]: {
    screen: TabTwo,
    path: `/${TAB_NAV_CHILD}`,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => renderTabIcon(tintColor, 'user'),
    },
  },
  [TAB_NAV_THREE]: {
    screen: TabThree,
    path: `/${TAB_NAV_THREE}`,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => renderTabIcon(tintColor, 'cog'),
    },
  },
};

const renderTabIcon = (tintColor, name) => {
  return (
    <Icon color={tintColor} name={name} size={25} />
  );
};

