// React
import React, { ReactElement, useState } from 'react';
// RN
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// Packages
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
// Styles
import { styles } from './styles.ts';
// Components
import { Button } from '../../components/button/index.tsx';
import { TextInput } from '../../components/text-input/index.tsx';
// Theme
import { baseTheme } from '../../theme/baseTheme.ts';
// Animation
import pairAnimation from '../../assets/animations/pairing.json';
import pairSuccessAnimation from '../../assets/animations/pairing_success.json';
// Store
import * as Store from '../../store/index';
// Types
import { Device } from '../../types/device.ts';
import { Movement } from '../../types/movement.ts';

export const PairDeviceModal = (): ReactElement => {
  const navigation = useNavigation();
  const dispatch = Store.useDispatch();

  const [pairId, setPairId] = useState<string>('');
  // 3 stages of Pairing - 0: Not paired yet, 1: Pairing, 2: Pair success
  const [pairingStage, setPairingStage] = useState<number>(0);

  const submitDeviceID = (): void => {
    setPairingStage(1);

    // Remove any keys before storing new one to store only ONE pairID
    AsyncStorage.removeItem('pair-device');

    AsyncStorage.setItem('pair-device', pairId);

    const newDevice: Device = {
      deviceId: pairId,
      temperature: 20,
      movement: Movement.active,
      status: 'Online',
      video: null,
      active: true,
    };

    //Save device in redux
    dispatch(Store.Devices.addDevice(newDevice));

    setTimeout(() => {
      setPairingStage(2);
    }, 4500);

  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.root}>
        <View style={styles.modalHeader}>
          <Text style={styles.title}>Pair New Device</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.title}>Close</Text>
          </Pressable>
        </View>
        <KeyboardAvoidingView
          style={styles.innerContainer}
          keyboardVerticalOffset={100}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          {pairingStage === 0 && (
            <Animated.View
              testID="pair-stage-one"
              style={styles.submitDeviceContainer}
              exiting={FadeOut.delay(200)}>
              <Text style={styles.subheader}>
                Please enter the Device ID to pair with app
              </Text>
              <TextInput
                testID="input-device-id"
                autoCapitalize="none"
                onTextChange={(e: string) => setPairId(e)}
                containerStyle={styles.inputContainer} />
            </Animated.View>
          )}
          {pairingStage === 1 && (
            <Animated.View
              testID="pair-stage-two"
              style={styles.animationContainer}
              entering={FadeIn.delay(200)}
              exiting={FadeOut.delay(200)}>
              <Text style={styles.pairingTxt}>Pairing New Device..</Text>
              <LottieView
                source={pairAnimation}
                style={styles.pairAnimation}
                autoPlay
                loop
              />
            </Animated.View>
          )}
          {pairingStage === 2 && (
            <Animated.View
              testID="pair-stage-three"
              style={styles.successContainer}
              exiting={FadeOut.delay(200)}>
              <Text style={styles.subheader}>Device Paired!</Text>
              <LottieView
                source={pairSuccessAnimation}
                style={styles.successAnimation}
                autoPlay
              />
            </Animated.View>
          )}
          {(pairingStage === 0 || pairingStage === 2) && (
            <Button
              testID="pair-device-button"
              text={pairingStage === 0 ? 'Pair Device' : 'Back to home'}
              backgroundColor={baseTheme.colors.secondary}
              disabled={pairingStage === 0 ? pairId === '' : false}
              onPress={() => pairingStage === 0 ? submitDeviceID() : navigation.goBack()} />
          )}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
