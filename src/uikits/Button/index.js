import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Button = props => {
  const {onPress, label} = props;
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
