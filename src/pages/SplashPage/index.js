import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {Title} from '../../uikits';

import styles from './styles';

const SplashPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingPage');
    }, 6000);
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <Title />
    </SafeAreaView>
  );
};

export default SplashPage;
