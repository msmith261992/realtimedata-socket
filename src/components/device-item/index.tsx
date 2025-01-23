// React
import React, { ReactElement } from 'react';
// RN
import {
  Pressable,
  Switch,
  Text,
  View,
} from 'react-native';
// Styles
import { useStyles } from './styles.ts';
// Types
import { Device } from '../../types/device.ts';
// Component
import { CircleButton } from '../circle-button/index.tsx';
// Icons
import { ThermometerIcon } from '../../icons/Thermometer.tsx';
// Theme
import { baseTheme } from '../../theme/baseTheme.ts';

export interface DeviceStatusProps {
  onPress: () => void;
  onSwitchPress: () => void;
  device: Device;
}

export const DeviceItem = ({ onPress, device, onSwitchPress }: DeviceStatusProps): ReactElement => {
  const styles = useStyles(device.status);

  return (
    <Pressable testID="device-item-pressable" onPress={onPress} style={styles.root} >
      <View style={[styles.row, styles.headerContainer]}>
        <View style={styles.status}>
          <View style={styles.dot} />
          <Text style={styles.deviceText}>{device.status}</Text>
        </View>
        <Switch
          testID="device-item-switch"
          style={styles.switch}
          value={device.status === 'Online' ? true : false}
          onValueChange={onSwitchPress}
        />
      </View>
        <View style={styles.row}>
          <CircleButton backgroundColor={baseTheme.colors.white} icon={<ThermometerIcon />} />
          <Text style={[styles.degreeTxt, styles.deviceText]} testID="temp-text">
            {device.temperature}°C
          </Text>
        </View>
        <Text style={[styles.deviceText]}>
          Current movement: <Text style={styles.boldTxt}>{device.movement}</Text>
        </Text>
    </Pressable>

  );
};
