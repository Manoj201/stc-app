// @flow
import React from 'react';
import {View, Image} from 'react-native';

import LoginDetailForm from '../forms/loginDetailForm/LoginDetailForm';

import styles from './LoginScreen.styles';

const crest = require('../../../theme/crest.png');

class LoginScreen extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerWrapper} >
        <View style={styles.chestContainer}>
          <Image
            source={crest}
            style={styles.chest}
          />
        </View>
        <View style={styles.inputContainer}>
          <LoginDetailForm />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
