import { StyleSheet } from 'react-native';
import { getSizing } from '../../theme/sizing';
import { baseTheme } from '../../theme/baseTheme';

export const useStyles = (status: 'Online' | 'Offline') => StyleSheet.create({
  root: {
    marginTop: getSizing(3, 'height'),
    backgroundColor: baseTheme.colors.purple,
    paddingHorizontal: getSizing(5, 'width'),
    paddingVertical: getSizing(3, 'height'),
    borderRadius: 16,
    zIndex: -999,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: getSizing(3, 'height'),
  },
  headerContainer: {
    justifyContent: 'space-between',
  },
  switch: {
    zIndex: 99,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceText: {
    textTransform: 'capitalize',
  },
  degreeTxt: {
    fontSize: 42,
    paddingLeft: getSizing(3, 'width'),
  },
  boldTxt: {
    fontWeight: 'bold',
  },
  dot: {
    height: getSizing(3, 'height'),
    width: getSizing(3, 'width'),
    backgroundColor: status === 'Online' ? baseTheme.colors.primary : baseTheme.colors.error,
    borderRadius: getSizing(20, 'width'),
    marginRight: getSizing(1, 'width'),
  },
});
