import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const disabledProps = isDisabled => isDisabled ? {
  color: 'rgb(192,192,192)'
} : {};

const NavButton = props => {
  const child = props.customIcon || <MaterialCommunityIcons
    name={props.iconName}
    size={props.iconSize}
    {...disabledProps(props.disabled)}
  />
  return !props.disabled ? <TouchableOpacity
    onPress={props.onPress}
    style={props.touchableStyle}
  >
    <View style={props.customViewStyle}>
      {child}
    </View>
  </TouchableOpacity>
    :
    child
};

NavButton.defaultProps = {
  disabled: false,
  iconSize: 24
};

NavButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  touchableStyle: PropTypes.object,
  customViewStyle: PropTypes.object,
  customIcon: PropTypes.object,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number
};

export default NavButton;
