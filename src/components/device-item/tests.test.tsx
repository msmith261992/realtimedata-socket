// React
import React from 'react';
// Testing
import {
  render,
  screen,
  waitFor,
  RenderResult,
  userEvent,
  fireEvent,
} from '@testing-library/react-native';
// Components
import {DeviceItem, DeviceStatusProps} from './index';
// RN testing Library
import '@testing-library/react-native/extend-expect';
// Data
import { defaultDevice } from '../../../data';
// Types
import { Device } from '../../types/device';

const defaultProps: DeviceStatusProps = {
  onPress:  jest.fn(),
  onSwitchPress: jest.fn(),
  device: defaultDevice as Device,
};

describe('Device item', () => {
  const setup = (): RenderResult => render(<DeviceItem {...defaultProps} />);

  it('renders', async () => {
    setup();

    await waitFor(() => expect(screen.getByTestId('device-item-pressable')).toBeOnTheScreen());
  });

  it('press entire device item & prop function to be called', async () => {
    setup();

    await userEvent.press(screen.getByTestId('device-item-pressable'));

    await waitFor(() => expect(defaultProps.onPress).toHaveBeenCalled());
  });

  it('press switch & prop function to be called', async () => {
    setup();

    const switchView = screen.getByTestId('device-item-switch');

    fireEvent(switchView, 'onValueChange');

    expect(defaultProps.onSwitchPress).toHaveBeenCalled();
  });

});
