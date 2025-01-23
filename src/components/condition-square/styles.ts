import { StyleSheet } from 'react-native';
import { getSizing } from '../../theme/sizing';
import { baseTheme } from '../../theme/baseTheme';

export const useStyles = (backgroundColor: string) => StyleSheet.create({
  root: {
    padding: getSizing(2, 'height'),
    borderRadius: 16,
    backgroundColor: backgroundColor ? backgroundColor : baseTheme.colors.white,
    flex: 1,
    marginRight: getSizing(3, 'width'),
  },
});
