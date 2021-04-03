import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {TextInput, Button} from '../../uikits';

import styles from './styles';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    navigation.replace('HomePage');
  };

  return (
    <SafeAreaView style={styles.main}>
      <TextInput
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="Username"
      />
      <View style={{height: 10}} />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry
      />
      <View style={{marginHorizontal: 50, marginTop: 100}}>
      <Button label="LOGIN" onPress={doLogin} />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
