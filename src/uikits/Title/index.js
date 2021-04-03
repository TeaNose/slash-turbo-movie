import React from 'react';
import {View, Image, Text} from 'react-native';

import TurboImage from '../../assets/images/turbo-icon.png';

import styles from './styles';

const Title = props => {
  return (
    <>
      <View style={styles.titleContainer}>
        <View style={styles.titleIconContainer}>
          <Image source={TurboImage} style={styles.icon} />
        </View>
        <View style={styles.titleLabelContainer}>
          <Text style={styles.titleLabel1}>Turbo</Text>
        </View>
      </View>
      <Text style={styles.titleLabel2}>Movie</Text>
    </>
  );
};

export default Title;
