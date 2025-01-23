import { StyleSheet } from 'react-native';
import { baseTheme } from '../../theme/baseTheme';
import { getSizing } from '../../theme/sizing';

export const useStyles = (backgroundColor?: string) => StyleSheet.create({
  circleButton: {
    height: getSizing(10, 'height'),
    width: getSizing(10, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor || baseTheme.colors.grey,
    borderRadius: getSizing(88, 'height'),
  },
});
