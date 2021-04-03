import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    elevation: 1,
    borderRadius: 4,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  thumbnailContainer: {
    flex: 3,
  },
  descContainer: {
    flex: 7,
    paddingVertical: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  thumbnail: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 3,
  },
});

export default styles;
