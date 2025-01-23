// React
import React, { ReactElement, useEffect } from 'react';
// RN
import {
  SafeAreaView,
  View,
} from 'react-native';
// Packages
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Socket
import { socket } from '../../delivery/socket.ts';
// Styles
import { styles } from './styles.ts';
// Components
import { GreetingHeader } from '../../components/greeting-header/index.tsx';
import { AddDevice } from '../../components/add-device/index.tsx';
import { DeviceItem } from '../../components/device-item/index.tsx';
// Types
import { Device } from '../../types/device.ts';
import { Movement } from '../../types/movement.ts';
// Utils
import { sendLocalNotification } from '../../utils/notifications/sendLocalNotification.ts';
// Store
import * as Store from '../../store/index';

export const HomeScreen = (): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = Store.useDispatch();

  const device = Store.useSelector(state => state.device.device);

  const switchActiveUse = (): void => {
    //Save device in redux
    dispatch(Store.Devices.modifyStatus(device?.status === 'Online' ? 'Offline' : 'Online'));
  };

  useEffect(()=> {
    if(device) {return;}

    // Fetch pair device id
    AsyncStorage.getItem('pair-device').then((id) => {
      if(!id) { return; }

      const newDevice: Device = {
        deviceId: id ? id : '',
        temperature: 20,
        movement: Movement.active,
        status: 'Online',
        video: null,
        active: true,
      };

      //Save device in redux
      dispatch(Store.Devices.addDevice(newDevice));
    });
  }, [device, dispatch]);

  useEffect(() => {
    if(!device) { return; }
    // Listen for events
    socket.on('new-temp', (data: number) => {
      // Don't update it the same
      if(data === device.temperature) { return; }

      // Send notification if temp reaches 38 or above
      if(data >= 38) {
        sendLocalNotification('High Temperature', "Baby's temperature is over 38 degrees, please go check");
      }

      //Save new state in redux
      dispatch(Store.Devices.modifyTemp(data));
    });

    socket.on('new-movement', (data) => {
      // Don't update it the same
      if(data === device.movement) { return; }

      //Save new state in redux
      dispatch(Store.Devices.modifyMovement(data));
    });

    return () => {
      socket.off('new-movement');
      socket.off('new-temp');
    };
  }, [device, dispatch]);

  return (
    <>
      <SafeAreaView style={styles.root} testID="home-container">
        <GreetingHeader name={'Matt'} />
        <View style={styles.innerContainer}>
          <AddDevice onPress={() => navigation.navigate('PairDeviceModal')} />
          {device && (
            <DeviceItem
              device={device}
              onPress={() => navigation.navigate('DeviceScreen')}
              onSwitchPress={() => switchActiveUse()} />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};
