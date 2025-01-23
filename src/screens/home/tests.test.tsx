// React
import React from 'react';
// RN Testing lib
import {RenderResult, screen, waitFor} from '@testing-library/react-native';
import {
  renderWithProviders,
} from '../../utils/testing/test-util';
import '@testing-library/react-native/extend-expect';
// Component
import {HomeScreen} from './index';
// Store
import * as Store from '../../store/index';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Socket
import { mockSocket } from '../../../jest-setup';

jest.useFakeTimers();

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks before each test
  });

  const setup = (): RenderResult =>
    renderWithProviders(<HomeScreen />, {
      preloadedState: {
        device: {
          ...Store.Devices.initialState,
        },
      },
    });

  it('Should render', async () => {
    setup();

    await waitFor(() => expect(screen.getByTestId('home-container')).toBeOnTheScreen());
  });

  it('web socket triggers and has been called on new temperature value', async () => {
    AsyncStorage.setItem('pair-device', 'deviceId');

   // @ts-ignore: Unreachable code error
    mockSocket.on?.mockImplementation((event: string, callback: (arg0: number) => void) => {
      if (event === 'new-temp') {
        callback(30);
      }
      return mockSocket;
    });

    setup();

    await waitFor(() => {
      jest.advanceTimersByTime(6000);
    });

    await waitFor(() => {
      expect(screen.getByText('30°C')).toBeTruthy();
    });

    expect(mockSocket.on).toHaveBeenCalledWith('new-temp', expect.any(Function));
  });

  it('web socket triggers and has been called on new movement value', async () => {
    AsyncStorage.setItem('pair-device', 'deviceId');

    // @ts-ignore: Unreachable code error
    mockSocket.on?.mockImplementation((event: string, callback: (arg0: string) => void) => {
      if (event === 'new-movement') {
        callback('asleep');
      }
      return mockSocket;
    });

    setup();

    await waitFor(() => {
      jest.advanceTimersByTime(60000);
    });

    await waitFor(() => {
      expect(screen.getByText('asleep')).toBeTruthy();
    });

    expect(mockSocket.on).toHaveBeenCalledWith('new-movement', expect.any(Function));
  });

});
