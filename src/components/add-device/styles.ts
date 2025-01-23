import { StyleSheet } from 'react-native';
import { getSizing } from '../../theme/sizing';
import { baseTheme } from '../../theme/baseTheme';

export const styles = StyleSheet.create({
  root: {
    padding: getSizing(4, 'width'),
    borderRadius: 16,
    backgroundColor: baseTheme.colors.secondary,
  },
  pairTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: baseTheme.colors.white,
  },
  subheader: {
    marginTop: getSizing(2, 'height'),
    fontSize: 15,
    color: baseTheme.colors.white,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
