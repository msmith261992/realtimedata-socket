import { StyleSheet } from 'react-native';
import { baseTheme } from '../../theme/baseTheme';
import { getSizing } from '../../theme/sizing';

export const useStyles = (focused: boolean) => StyleSheet.create({
  input: {
    borderRadius: getSizing(4, 'width'),
    borderWidth: 2,
    padding: getSizing(4, 'width'),
    borderColor: focused ? baseTheme.colors.grey : baseTheme.colors.grey,
  },
});
