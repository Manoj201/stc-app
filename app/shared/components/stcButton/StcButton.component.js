// @flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './StcButton.styles';

class StcButton extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }

  handleOnPress = () => {
    this.props.onPress();
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleOnPress}
        style={styles.container}
      >
        <Text style={{fontSize: 18, color: 'brown'}}>SIGN IN</Text>
      </TouchableOpacity>
    );
  }
}

export default StcButton;
