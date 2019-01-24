// @flow
import React from 'react';
import {View, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoginDetailForm from '../forms/loginDetailForm/LoginDetailForm';
import AuthenticationActions from '../actions/authentication.actions';

import styles from './LoginScreen.styles';
import {LOGIN_SUBTITLE, SCHOOL_TITLE} from '../../../shared/Strings';

const crest = require('../../../theme/crest.png');

class LoginScreen extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
  }

  handleLogin = () => {
    const {values: {username, password}} = this.props.loginDetailForm;
    this.props.dispatch(AuthenticationActions.getLoginVerification(username, password));
  };

  render() {
    return (
      <View style={styles.containerWrapper} >
        <View style={styles.chestContainer}>
          <Image
            source={crest}
            style={styles.chest}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.titleText}>{SCHOOL_TITLE.toUpperCase()}</Text>
            <Text style={styles.subTitleText}>{LOGIN_SUBTITLE.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <LoginDetailForm
            onHandleSubmit={this.handleLogin}
          />
        </View>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  loginDetailForm: PropTypes.any,
};

LoginScreen.defaultProps = {
  loginDetailForm: {},
};

const mapStateToProps = (state, ownProps) => {
  return {
    loginDetailForm: state.form.loginDetail,
  };
};

export default connect(mapStateToProps)(LoginScreen);
