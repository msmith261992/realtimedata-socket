import { StyleSheet } from 'react-native';
import { getSizing } from '../../theme/sizing';

export const styles = StyleSheet.create({
  root: {
    paddingHorizontal: getSizing(4, 'width'),
    paddingTop: getSizing(2, 'height'),
  },
  header: {
    fontSize: 24,
  },
});
