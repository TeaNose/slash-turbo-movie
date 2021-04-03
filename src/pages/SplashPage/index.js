import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './styles';

const SplashPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingPage');
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <Text>SplashPage</Text>
    </SafeAreaView>
  );
};

export default SplashPage;
