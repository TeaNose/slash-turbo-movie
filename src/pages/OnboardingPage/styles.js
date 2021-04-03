import {StyleSheet} from 'react-native';

import Color from '../../styles/color';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 32,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  welcomeContainer: {
    marginVertical: 100,
  },
});
export default styles;
