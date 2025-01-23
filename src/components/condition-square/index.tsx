// React
import React, { PropsWithChildren, ReactElement } from 'react';
// RN
import {
  View,
} from 'react-native';
// Styles
import { useStyles } from './styles.ts';

export interface ConditionSquareProps {
  backgroundColor: string;
}

export const ConditionSquare = ({ backgroundColor, children }: PropsWithChildren<ConditionSquareProps>): ReactElement => {
  const styles = useStyles(backgroundColor);

  return (
    <View style={styles.root} testID="condition-square">
      {children}
    </View>
  );
};
