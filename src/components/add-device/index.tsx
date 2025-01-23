// React
import React, { ReactElement } from 'react';
// RN
import {
  Pressable,
  Text,
  View,
} from 'react-native';
// Styles
import { styles } from './styles.ts';
import { CircleButton } from '../circle-button/index';
// Theme
import { baseTheme } from '../../theme/baseTheme.ts';
// Icon
import { PlusIcon } from '../../icons/PlusIcon.tsx';

export interface AddDeviceProps {
  onPress: () => void;
}

export const AddDevice = ({ onPress }: AddDeviceProps): ReactElement => {
  return (
    <Pressable style={styles.root} onPress={onPress} testID="add-device-button">
      <Text style={styles.pairTxt}>Pair new device</Text>
      <View style={styles.iconContainer}>
        <Text style={styles.subheader}>Connect to hardware to view it here</Text>
        <CircleButton
          backgroundColor={baseTheme.colors.white}
          icon={<PlusIcon />} />
      </View>
    </Pressable>
  );
};
