import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ important, style, children, ...props }) => {
  return (
    <Text
      style={{
        fontFamily: important ? 'open-sans-bold' : 'open-sans',
        ...style,
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CustomText;
