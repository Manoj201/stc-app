// @flow
import React from 'react';
import {View, TextInput, Animated, Platform} from 'react-native';
import PropTypes from 'prop-types';


import styles from './AnimatedTextInput.styles';

class AnimatedTextInput extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.input ? props.input.value : '',
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
    this.props.onChangeText(newText);
  };

  handleIsFocused = (value: any) => {
    this.setState({
      isFocused: true,
    });
    this.props.onFocus(value);
  };

  handleOnBlur = () => {
    this.setState({
      isFocused: false,
    });
    this.props.onBlur();
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

    const {label, secureTextEntry} = this.props;

    return (
      <View style={styles.container}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <View style={styles.inputWrapper}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            onBlur={this.handleOnBlur}
            onChangeText={this.handleOnChangeText}
            onFocus={this.handleIsFocused}
            secureTextEntry={secureTextEntry}
            style={styles.textInput}
            underlineColorAndroid='transparent'
            value={this.state.value}
          />
        </View>
      </View>
    );
  }
}

AnimatedTextInput.propTypes = {
  input: PropTypes.any,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  secureTextEntry: PropTypes.bool,

};

AnimatedTextInput.defaultProps = {
  input: {},
  secureTextEntry: false,
  onBlur: () => {},
  onChangeText: () => {},
  onFocus: () => {},
};

export default AnimatedTextInput;
