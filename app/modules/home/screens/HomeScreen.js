// @flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import homeActions from '../actions/HomeActions';
import rootStackNavActions from '../../../navigations/primaryStackNavigator/PrimaryStackNavigation.action';

import styles from './HomeScreen.styles';

class HomeScreen extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    props.dispatch( homeActions.getUserById(10));
  }

  handlePress= (): void => {
    rootStackNavActions.navigateToChild();
  };
  render() {
    return (
      <View style={styles.containerWrapper}>
        <Text>This is Home</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>Navigate With Root Stack</Text>
        </TouchableOpacity>
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

