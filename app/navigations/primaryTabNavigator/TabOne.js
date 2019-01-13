// @flow

import React from 'react';
import {Text, View} from 'react-native';

class TabOne extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Fucking Tab One</Text>
      </View>
    );
  }
}

export default TabOne;
