// React
import React, { useEffect } from 'react';
// RN
import { LogBox } from 'react-native';
// React Nav
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// Notifications
import notifee from '@notifee/react-native';
// Screens
import { HomeScreen } from './screens/home';
import { PairDeviceModal } from './screens/pair-device';
import { DeviceViewScreen } from './screens/device-view';

const RootStack = createStackNavigator();

function App(): React.JSX.Element {
  const requestNotificationsPermission = async (): Promise<void> => {
    await notifee.requestPermission();

    // Create a channel (required for Android)
    await notifee.createChannel({
      id: 'local-notifications',
      name: 'local-notifications',
    });
  };

  useEffect(() => {
    requestNotificationsPermission();
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="DeviceScreen" component={DeviceViewScreen} />
          <RootStack.Screen name="PairDeviceModal" component={PairDeviceModal} options={{ presentation: 'modal' }} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
