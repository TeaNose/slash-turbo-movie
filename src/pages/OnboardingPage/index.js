import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {Button} from '../../uikits';

import styles from './styles';

const OnboardingPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <Button
        onPress={() => navigation.replace('LoginPage')}
        label="GETTING START"
      />
    </SafeAreaView>
  );
};

export default OnboardingPage;
