// React
import React, {ReactElement} from 'react';
// RN
import {Text, Pressable} from 'react-native';
// Styles
import {useStyles} from './styles';

export interface ButtonProps {
  testID?: string;
  text?: string;
  backgroundColor?: string;
  onPress: () => void;
  disabled?: boolean;
  size?: 'small' | 'medium'
}

export const Button = ({
  testID,
  text,
  backgroundColor,
  onPress,
  disabled,
  size = 'medium',
}: ButtonProps): ReactElement => {
  const styles = useStyles(backgroundColor, disabled, size);
  return (
    <Pressable
      testID={testID}
      onPress={() => onPress()}
      disabled={disabled}
      style={styles.button}>
        <Text style={styles.buttonContent}>{text}</Text>
    </Pressable>
  );
};
