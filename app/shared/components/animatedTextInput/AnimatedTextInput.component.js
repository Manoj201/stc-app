// @flow
import React from 'react';
import {View, Text, TextInput, Animated, Platform} from 'react-native';


import styles from './AnimatedTextInput.styles';

class AnimatedTextInput extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isFocused: false,
    };
  }

  componentWillMount() {
    this._animatedIsFocuse = new Animated.Value(this.state.value === '' ? 0: 1);
  }

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocuse, {
      toValue: (this.state.isFocused || this.state.value !== '' ) ? 1: 0,
      duration: 200,
    }).start();
  }

  handleOnChangeText = (newText) => {
    this.setState({
      value: newText,
    });
  };

  handleIsFocused = () => {
    this.setState({
      isFocused: true,
    });
  };

  handleOnBlur = () => {
    this.setState({
      isFocused: false,
    });
  };


  render() {
    const labelStyle = {
      position: 'absolute',
      paddingHorizontal: 10,
      top: this._animatedIsFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [20, Platform.OS ==='ios' ? 5 : 10],
      }),
      left: 14,
      fontSize: this._animatedIsFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 14],
      }),
      color: this._animatedIsFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [this.props.activeLabelColor, this.props.inActiveLabelColor],
      }),
      fontFamily: 'DINOT-CondBold',
    };
    return (
      <View style={styles.container}>
        <Animated.Text style={labelStyle}>Username</Animated.Text>
        <View style={styles.inputWrapper}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            onBlur={this.handleOnBlur}
            onChangeText={this.handleOnChangeText}
            onFocus={this.handleIsFocused}
            style={styles.textInput}
            underlineColorAndroid='transparent'
            value={this.state.value}
          />
        </View>
      </View>
    );
  }
}

export default AnimatedTextInput;
