import notifee from '@notifee/react-native';

export const sendLocalNotification = async (title: string, body: string): Promise<void>  =>  {
  // Display a notification
  await notifee.displayNotification({
    title: title,
    body: body,
    android: {
      channelId: 'local-notifications',
    },
  });
};
