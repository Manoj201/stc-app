// @flow
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import HomeReducer from '../modules/home/reducers/HomeReducer';

export default combineReducers({
  home: HomeReducer,
  form: formReducer,
});
