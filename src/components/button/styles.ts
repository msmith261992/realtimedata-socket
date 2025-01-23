import { StyleSheet } from 'react-native';
import { baseTheme } from '../../theme/baseTheme';
import { getSizing } from '../../theme/sizing';

export const useStyles = (backgroundColor?: string, disabled?: boolean, size?: 'small' | 'medium') => StyleSheet.create({
  button: {
    width: size === 'small' ? '40%' : '80%',
    backgroundColor: backgroundColor || baseTheme.colors.grey,
    borderRadius: getSizing(6, 'height'),
    paddingHorizontal: getSizing(4, 'width'),
    paddingVertical: getSizing(3, 'height'),
    opacity: disabled ? 0.25 : 1,
    alignSelf: 'center',
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: baseTheme.colors.white,
  },
});
