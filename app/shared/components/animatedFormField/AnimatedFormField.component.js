// @flow
import React from 'react';
import {AnimatedTextInput} from '../../components';

class AnimatedFormFieldComponent extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      blured: false,
    };
  }

  handleOnChange = (value: any): void => {
    const {input} = this.props;
    input.onChange && input.onChange(value);
  };

  handleOnBlur = (): void => {
    const {input} = this.props;
    this.setState({
      blured: true,
    });
    input.onBlur && input.onBlur();
  };

  handleOnFocus = (value: any): void => {
    const {input} = this.props;
    input.onFocus && input.onFocus(value);
  };

  render() {
    const {input, meta} = this.props;
    return (
      <AnimatedTextInput
        {...this.props}
        onBlur={this.handleOnBlur}
        onChangeText={this.handleOnChange}
        onFocus={this.handleOnFocus}
        value={input.value}
      />
    );
  }
}

export default AnimatedFormFieldComponent;
