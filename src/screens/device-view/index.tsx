// React
import React, {ReactElement, useState} from 'react';
// RN
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
// Packages
import { RTCView, mediaDevices } from 'react-native-webrtc';
import { useNavigation } from '@react-navigation/native';
// Styles
import {styles} from './styles.ts';
// Icons
import { ThermometerIcon } from '../../icons/Thermometer.tsx';
import { ClockIcon } from '../../icons/ClockIcon.tsx';
// Components
import { CircleButton } from '../../components/circle-button/index.tsx';
import { ConditionSquare } from '../../components/condition-square/index.tsx';
import { Button } from '../../components/button/index.tsx';
// Theme
import { baseTheme } from '../../theme/baseTheme.ts';
// Store
import * as Store from '../../store/index';

export const DeviceViewScreen = (): ReactElement => {
  const navigation = useNavigation();
  // Device data
  const device = Store.useSelector(state => state.device.device);

  // Stream data
  const [stream, setStream] = useState<any | null>(null);

  const startDummyVideo = async () => {
    try {
      // Create a blank video stream using a dummy video track
      const mediaStream = await mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      setStream(mediaStream);
    } catch (error) {
      console.error('Failed to start video stream:', error);
    }
  };

  const stopDummyVideo = () => {
    if (stream) {
      // Stop all tracks to stop the video
      stream.getTracks().forEach((track: any) => track.stop());
      setStream(null);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.root} testID="device-view-container">
        <View style={styles.backButton}>
          <Button size="small" text="Back" onPress={() => navigation.goBack()} />
        </View>
        <View>
          <RTCView
            streamURL={stream?.toURL()}
            style={styles.video}
            objectFit="cover"
            mirror={true} // Optional: Mirror the video
          />
        <View style={styles.buttonContainer}>
          <Button
            text="Start Stream"
            size="small"
            onPress={startDummyVideo}
            backgroundColor={baseTheme.colors.secondary} />
          <Button
            text="Stop Stream"
            size="small"
            onPress={stopDummyVideo}
            disabled={!stream} />
          </View>
        </View>
        <Text style={styles.header}>Conditions</Text>
        <View style={styles.conditionContainer}>
          <ConditionSquare backgroundColor={baseTheme.colors.purple}>
            <CircleButton
              icon={<ThermometerIcon/>}
              backgroundColor={baseTheme.colors.white} />
            <View style={styles.statusTxtContainer}>
              <Text style={[styles.statusTxt, styles.value]}>{device?.temperature}°C</Text>
              <Text style={styles.statusTxt}>Temperature</Text>
            </View>
          </ConditionSquare>
          <ConditionSquare backgroundColor={baseTheme.colors.purple}>
            <CircleButton
              icon={<ClockIcon/>}
              backgroundColor={baseTheme.colors.white}
            />
            <View style={styles.statusTxtContainer}>
              <Text style={[styles.statusTxt, styles.value]}>{device?.movement}</Text>
              <Text style={styles.statusTxt}>Movement</Text>
            </View>
          </ConditionSquare>
        </View>
      </View>
    </SafeAreaView>
  );
};
