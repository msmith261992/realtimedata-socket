// React
import React, {ReactElement} from 'react';
// RN
import {View} from 'react-native';
// Styles
import {useStyles} from './styles';

export interface CircleButtonProps {
  testID?: string;
  backgroundColor?: string;
  icon?: ReactElement;
}

export const CircleButton = ({
  testID,
  backgroundColor,
  icon,
}: CircleButtonProps): ReactElement => {
  const styles = useStyles(backgroundColor);
  return (
    <View
      testID={testID}
      style={styles.circleButton}>
      {icon}
    </View>
  );
};
