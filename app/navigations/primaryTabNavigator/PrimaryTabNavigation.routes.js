// @flow

import TabOne from './TabOne';
import TabTwo from './TabTwo';

export const TAB_NAV_HOME = 'TabOne';
export const TAB_NAV_CHILD = 'TabTwo';

export const TAB_ROUTES = {
  [TAB_NAV_HOME]: {
    screen: TabOne,
    path: `/${TAB_NAV_HOME}`,
  },
  [TAB_NAV_CHILD]: {
    screen: TabTwo,
    path: `/${TAB_NAV_CHILD}`,
  },
};
