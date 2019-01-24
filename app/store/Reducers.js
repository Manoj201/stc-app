// @flow
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import AuthenticationReducer from '../modules/authentication/reducers/authentication.reducer';
import HomeReducer from '../modules/home/reducers/HomeReducer';

export default combineReducers({
  authentication: AuthenticationReducer,
  home: HomeReducer,
  form: formReducer,
});
