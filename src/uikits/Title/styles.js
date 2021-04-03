import {StyleSheet} from 'react-native';

import Color from '../../styles/color';

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleIconContainer: {
    justifyContent: 'center',
  },
  titleLabelContainer: {
    justifyContent: 'center',
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  titleLabel1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Color.ROYAL_BLUE,
  },
  titleLabel2: {
    fontSize: 56,
    fontWeight: 'bold',
    color: Color.ROYAL_BLUE,
    marginTop: -15,
  },
});
export default styles;
