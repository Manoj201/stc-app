import React from 'react';
import {View, Text} from 'react-native';

class ChildScreen extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Child Component</Text>
      </View>
    );
  }
}

export default ChildScreen;
