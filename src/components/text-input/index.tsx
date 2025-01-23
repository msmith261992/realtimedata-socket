// React
import React, {ReactElement, useState} from 'react';
// RN
import {KeyboardTypeOptions, TextInput as RnInput, TextStyle} from 'react-native';
// Styles
import {useStyles} from './styles';

export interface TextInputProps {
  testID?: string;
  placeholder?: string;
  containerStyle?: TextStyle;
  onTextChange?: (e: string) => void;
  type?: KeyboardTypeOptions;
  value?: string;
  autoCapitalize?: RnInput['props']['autoCapitalize'];
}

export const TextInput = ({
  testID,
  placeholder,
  containerStyle,
  onTextChange,
  type,
  value,
  autoCapitalize,
}: TextInputProps): ReactElement => {
  const [focused, setFocus] = useState<boolean>(false);
  const styles = useStyles(focused);

  return (
    <RnInput
      testID={testID}
      placeholder={placeholder}
      style={{...styles.input, ...containerStyle}}
      keyboardType={type}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onChangeText={e => onTextChange && onTextChange(e)}
      value={value}
      autoCapitalize={autoCapitalize}
    />
  );
};
