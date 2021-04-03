import {StyleSheet} from 'react-native';

import Color from '../../styles/color';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: Color.ROYAL_BLUE,
    paddingHorizontal: 24,
  },
  label: {
    fontWeight: 'bold',
    color: Color.WHITE,
  },
});

export default styles;
