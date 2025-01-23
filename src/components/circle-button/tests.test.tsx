// React
import React from 'react';
// Testing
import {
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
// Components
import {CircleButton, CircleButtonProps} from './index';
// RN testing Library
import '@testing-library/react-native/extend-expect';
// Icons
import { ThermometerIcon } from '../../icons/Thermometer';

const defaultProps: CircleButtonProps = {
  testID: 'circle-button',
  backgroundColor: 'red',
};

describe('Circle button', () => {
  it('renders', async () => {
    render(<CircleButton {...defaultProps} />);

    await waitFor(() => expect(screen.getByTestId('circle-button')).toBeOnTheScreen());
  });

  it('circle button has correct background color from prop', async () => {
    render(
      <CircleButton {...defaultProps} backgroundColor="white" />,
    );

    expect(await screen.getByTestId('circle-button')).toHaveStyle({
      backgroundColor: 'white',
    });
  });

  it('renders icon', async () => {
    render(<CircleButton {...defaultProps} icon={<ThermometerIcon testID="thermo-icon" />} />);

    expect(await screen.getByTestId('thermo-icon')).toBeOnTheScreen();
  });
});
