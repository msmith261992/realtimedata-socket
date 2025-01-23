// React
import React from 'react';
// Testing
import {
  render,
  screen,
  userEvent,
  waitFor,
  RenderResult,
} from '@testing-library/react-native';
// Components
import {AddDevice, AddDeviceProps} from './index';
// RN testing Library
import '@testing-library/react-native/extend-expect';
// Theme
import { getSizing } from '../../theme/sizing';
import { baseTheme } from '../../theme/baseTheme';

const defaultProps: AddDeviceProps = {
  onPress: jest.fn(),
};

describe('Add Device', () => {
  const setup = (): RenderResult => render(<AddDevice {...defaultProps} />);

  it('renders correct text', async () => {
    setup();

    await waitFor(() => expect(screen.getByText('Pair new device')).toBeOnTheScreen());
  });

  it('display & press triggers onPress prop', async () => {
    setup();

    await userEvent.press(screen.getByTestId('add-device-button'));

    await waitFor(() => expect(defaultProps.onPress).toHaveBeenCalled());
  });

  it('has correct styling', async () => {
    setup();

    expect(await screen.getByTestId('add-device-button')).toHaveStyle({
      padding: getSizing(4, 'width'),
      borderRadius: 16,
      backgroundColor: baseTheme.colors.secondary,
    });
  });

});
