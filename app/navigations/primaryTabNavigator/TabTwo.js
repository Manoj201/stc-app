// @flow

import React from 'react';
import {Text, View} from 'react-native';

class TabTwo extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Fucking Tab Two......</Text>
      </View>
    );
  }
}

export default TabTwo;
