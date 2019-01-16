// @flow
import React from 'react';
import {View, Text, Image,  TouchableOpacity, TextInput} from 'react-native';

import {AnimatedTextInput} from '../../../shared/components';

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
            style={styles.chest}
            source={crest}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            <AnimatedTextInput />
            <AnimatedTextInput />
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
