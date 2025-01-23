import { StyleSheet } from 'react-native';
import { baseTheme } from '../../theme/baseTheme';
import { getSizing } from '../../theme/sizing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: getSizing(4, 'width'),
    backgroundColor: baseTheme.colors.background,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: getSizing(2, 'height'),
  },
  title: {
    fontSize: 24,
  },
  subheader: {
    fontSize: 20,
  },
  submitDeviceContainer: {
    paddingTop: getSizing(5, 'height'),
  },
  inputContainer: {
    marginBottom: getSizing(3, 'height'),
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  pairingTxt: {
    fontSize: 32,
    marginBottom: getSizing(5, 'height'),
  },
  pairAnimation: {
    height: getSizing(75, 'height'),
    width: '100%',
  },
  successAnimation: {
    height: getSizing(100, 'height'),
    width: '100%',
  },
});
