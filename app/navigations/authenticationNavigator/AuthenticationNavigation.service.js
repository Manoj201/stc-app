// @flow
import {NavigationActions, NavigationContainer} from 'react-navigation';

let _navigator: NavigationContainer | null = null;
type navParams = any;

const setAuthenticationNavigator = (navigatorRef: NavigationContainer): void => {
  _navigator = navigatorRef;
};

const navigate = (routeName: string, params: navParams = {}): void => {
  _navigator && _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

const goBack = (): void => {
  _navigator && _navigator.dispatch(NavigationActions.back());
};

export default {
  goBack,
  navigate,
  setAuthenticationNavigator,
};
