import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './styles';

const MovieCard = props => {
  const {thumbnail, title, rating, types} = props;
  return (
    <View style={styles.main}>
      <View style={styles.thumbnailContainer}>
        <Image
          source={{uri: thumbnail}}
          resizeMode="cover"
          style={styles.thumbnail}
        />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{rating}</Text>
        <Text>{types}</Text>
      </View>
    </View>
  );
};

export default MovieCard;
