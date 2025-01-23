import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { Socket } from 'socket.io-client';

// Navigation
export const mockedNavigation = jest.fn();
export const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');

  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigation,
      goBack: mockedGoBack,
      addListener: jest.fn(),
    }),
  };
});

// Async Storage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Reanimated
require('react-native-reanimated').setUpTests();

// Notifications
jest.mock('@notifee/react-native', () => ({
  requestPermission: jest.fn(() => Promise.resolve(true)),
  displayNotification: jest.fn(),
  createChannel: jest.fn(),
}));

// Video
jest.mock('react-native-webrtc', () => {
  return {
    RTCPeerConnection: jest.fn(() => ({
      createOffer: jest.fn(() => Promise.resolve({ sdp: 'mockOffer' })),
      createAnswer: jest.fn(() => Promise.resolve({ sdp: 'mockAnswer' })),
      setLocalDescription: jest.fn(() => Promise.resolve()),
      setRemoteDescription: jest.fn(() => Promise.resolve()),
      addIceCandidate: jest.fn(() => Promise.resolve()),
      onicecandidate: null,
    })),
    MediaStream: jest.fn(() => ({
      addTrack: jest.fn(),
      removeTrack: jest.fn(),
    })),
    getUserMedia: jest.fn(() =>
      Promise.resolve({
        getTracks: jest.fn(() => []),
        getVideoTracks: jest.fn(() => []),
        getAudioTracks: jest.fn(() => []),
      })
    ),
  };
});

//Socket.io
const mockSocket: jest.Mocked<Partial<Socket>> = {
  on: jest.fn(),
  emit: jest.fn(),
  off: jest.fn(),
  disconnect: jest.fn(),
};

jest.mock('socket.io-client', () => {
  const io = jest.fn(() => mockSocket);
  return io;
});

export { mockSocket };

//WebRTC
jest.mock('react-native-webrtc', () => ({
  toURL: jest.fn(() => 'mockStreamURL'),
  RTCView: jest.fn(),
}));
