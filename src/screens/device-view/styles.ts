import { StyleSheet } from 'react-native';
import { baseTheme } from '../../theme/baseTheme';
import { getSizing } from '../../theme/sizing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: baseTheme.colors.background,
    paddingHorizontal: getSizing(4, 'width'),
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    flexDirection: 'row',
    paddingBottom: getSizing(3, 'height'),
  },
  video: {
    width: '100%',
    height: getSizing(50, 'height'),
  },
  statusTxtContainer: {
    alignItems: 'flex-end',
  },
  statusTxt: {
    textTransform: 'capitalize',
  },
  value: {
    fontSize: 32,
  },
  conditionContainer: {
    flexDirection: 'row',
    paddingVertical: getSizing(3, 'height'),
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: getSizing(5, 'height'),
  },
});
