// @flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './StcButton.styles';

class StcButton extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={{backgroundColor: '#ffffff00', alignItems: 'center', paddingVertical: 10, borderRadius: 5, borderWidth: 2, borderColor: 'brown'}}>
        <Text style={{fontSize: 18, color: 'brown'}}>SIGN IN</Text>
      </TouchableOpacity>
    );
  }
}

export default StcButton;
