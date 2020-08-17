import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from './Text';

import Colors from '../../const/Colors';

const CustomText = ({ title, onPress, buttonStyle, textStyle, ...props }) => {
  const bgDisabled = props.disabled ? { backgroundColor: 'grey' } : {};
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, ...buttonStyle, ...bgDisabled }}
      {...props}
    >
      <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: Colors.tint_2,
  },
  buttonText: { color: 'white', fontSize: 18, textAlign: 'center' },
});

export default CustomText;
