// @flow
import {combineReducers} from 'redux';

import HomeReducer from '../modules/home/reducers/HomeReducer';

export default combineReducers({
  home: HomeReducer,
});
