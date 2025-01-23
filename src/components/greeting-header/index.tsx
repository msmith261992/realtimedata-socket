// React
import React, { ReactElement } from 'react';
// RN
import {
  Text,
  View,
} from 'react-native';
// Styles
import { styles } from './styles.ts';

export interface GreetingHeaderProps {
  name: string;
}

export const GreetingHeader = ({ name }: GreetingHeaderProps): ReactElement => {
  return (
    <View style={styles.root}>
      <Text style={styles.header} testID="greeting-text">Hello, {name} 👋</Text>
    </View>
  );
};
