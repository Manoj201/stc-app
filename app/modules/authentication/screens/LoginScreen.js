// @flow
import React from 'react';
import {View, Text, Image,  TouchableOpacity, TextInput} from 'react-native';

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
          <View style={styles.inputFieldContainer}>
            <Text>Username</Text>
            <TextInput style={{flex: 1, backgroundColor: 'red'}}/>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
