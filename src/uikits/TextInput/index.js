import React from 'react';
import {View, TextInput as TextInputNative} from 'react-native';

import styles from './styles';

const TextInput = props => {
  const {value, onChangeText, placeholder, secureTextEntry} = props;

  return (
    <View style={styles.main}>
      <TextInputNative
        value={value}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

TextInput.defaultProps = {
  secureTextEntry: false,
};

export default TextInput;
