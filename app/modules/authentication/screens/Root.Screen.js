// @flow
import React from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AuthenticationNavigationComponent from '../../../navigations/authenticationNavigator';
import PrimaryStackNavigationComponent from '../../../navigations/primaryStackNavigator';

import AsyncStorageService from '../../../servicess/AsyncStorageService';


class RootScreen extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
    };
    this.resolveToken();
  }

  componentWillReceiveProps(newProps) {
    this.setState(
      (prevState) => ({
        token: newProps.loginData.token,
      })
    );
  }

  resolveToken = async () => {
    const token = await AsyncStorageService.getAsyncData('token');
    this.setState({
      token,
    });
  };

  render() {
    return (
      this.state.token==null ? <AuthenticationNavigationComponent /> : <PrimaryStackNavigationComponent />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginData: state.authentication.loginData,
  };
};

export default connect(mapStateToProps)(RootScreen);
