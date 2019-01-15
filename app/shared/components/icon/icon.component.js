// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';


import icoMoonConfig from '../../../theme/selection.json';

const IcomoonIcon = createIconSetFromIcoMoon(icoMoonConfig);

const Icon = (props: any) => {
  return (
    <View>
      <IcomoonIcon
        color={props.color}
        name={props.name}
        size={props.size}
      />
    </View>
  );
};

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Icon;
