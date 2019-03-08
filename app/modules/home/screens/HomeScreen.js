// @flow
import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {connect} from 'react-redux';

import homeActions from '../actions/HomeActions';

import styles from './HomeScreen.styles';

class HomeScreen extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.containerWrapper}>
        <Text>Manoj</Text>
      </View>
    );
  }
}

HomeScreen.prototypes = {};

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps)(HomeScreen);

