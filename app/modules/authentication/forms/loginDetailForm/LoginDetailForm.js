// @flow
import React from 'react';
import {View, Text} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import type {Element as ReactElement} from 'react';

import {AnimatedFormFieldComponent, StcButton} from '../../../../shared/components';

import {PASSWORD, USERNAME} from '../../../../shared/Strings';

class LoginDetailForm extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }

  renderAnimatedFormField = (input, label: string, additionalProps: Object): ReactElement<any> => {
    return (
      <AnimatedFormFieldComponent
        {...input}
        {...additionalProps}
        label={label}
      />
    );
  };

  renderUserNameField = (input: any): ReactElement<any> => {
    return (
      this.renderAnimatedFormField(input, USERNAME.toUpperCase(), {})
    );
  };

  renderPasswordField = (input: any): ReactElement<any> => {
    const additionalProps = {
      secureTextEntry: true,
    };

    return (
      this.renderAnimatedFormField(input, PASSWORD.toUpperCase(), additionalProps)
    );
  };

  renderLoginFormWrapper = (): ReactElement<any> => {
    return (
      <View style={{flex: 1}}>
        <Field
          component={this.renderUserNameField}
          name="username"
        />
        <Field
          component={this.renderPasswordField}
          name="password"
        />
      </View>
    );
  };

  renderBottomWrapper = (): ReactElement<any>  => {
    return (
      <View style={{paddingVertical: 15, paddingHorizontal: 10}}>
        <StcButton />
        <View>
          <Text>CREATE PROFILE</Text>
        </View>
      </View>
    );
  };

  render() {
    const formWrapper = this.renderLoginFormWrapper();
    const bottomWrapper = this.renderBottomWrapper();
    return (
      <View style={{ flex: 1, flexDirection: 'column',
        justifyContent: 'space-between'}}>
        {formWrapper}
        {bottomWrapper}
      </View>
    );
  }
}

export default reduxForm({
  form: 'loginDetail',
})(LoginDetailForm);


