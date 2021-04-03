import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {get} from '../../services';

import {MovieCard} from '../../uikits';

import styles from './styles';

const DUMMY = [
  {
    id: 1,
    thumbnail: 'https://i.ebayimg.com/images/g/MOgAAOSw8apZgqUD/s-l300.jpg',
    title: 'Justice League',
    rating: 5,
    types: 'ga|asd|asd',
  },
  {
    id: 2,
    thumbnail: 'https://i.ebayimg.com/images/g/MOgAAOSw8apZgqUD/s-l300.jpg',
    title: 'Justice League 2',
    rating: 5,
    types: 'ga|asd|asd',
  },
  {
    id: 3,
    thumbnail: 'https://i.ebayimg.com/images/g/MOgAAOSw8apZgqUD/s-l300.jpg',
    title: 'Justice League 3',
    rating: 5,
    types: 'ga|asd|asd',
  },
];

const HomePage = () => {
  useEffect(() => {
    get('https://yts.mx/api/v2/list_movies.json')
      .then(response => {
        console.log('response: ' + JSON.stringify(response));
      })
      .catch(error => {
        console.log('error: ' + JSON.stringify(error));
      });
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        data={DUMMY}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MovieCard
            thumbnail={item?.thumbnail}
            title={item?.title}
            rating={item?.rating}
            types={item?.types}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomePage;
