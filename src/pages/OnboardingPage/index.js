import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {Button, Title} from '../../uikits';

import styles from './styles';

const OnboardingPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <Title />

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>

      <Button
        onPress={() => navigation.replace('LoginPage')}
        label="GETTING START"
      />
    </SafeAreaView>
  );
};

export default OnboardingPage;
