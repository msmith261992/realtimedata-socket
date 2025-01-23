import { StyleSheet } from 'react-native';
import { baseTheme } from '../../theme/baseTheme';
import { getSizing } from '../../theme/sizing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: baseTheme.colors.background,
  },
  innerContainer: {
    padding: getSizing(4, 'width'),
  },
});
