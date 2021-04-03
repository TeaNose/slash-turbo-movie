import {StyleSheet} from 'react-native';

import Color from './color';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingVertical: '12',
    borderRadius: 12,
    backgroundColor: Color.ROYAL_BLUE,
  },
  label: {
    fontWeight: 'bold',
    color: Color.WHITE,
  },
});

export default styles;
