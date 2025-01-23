// React
import React from 'react';
// RN Testing lib
import {RenderResult, screen, userEvent, waitFor} from '@testing-library/react-native';
import {
  renderWithProviders,
} from '../../utils/testing/test-util';
import '@testing-library/react-native/extend-expect';
// Component
import {PairDeviceModal} from './index';
// Navigation
import { mockedGoBack } from '../../../jest-setup';

jest.useFakeTimers();

describe('Pair Device', () => {
  const setup = (): RenderResult =>
    renderWithProviders(<PairDeviceModal />);

  it('Should render', async () => {
    setup();

    const text = await waitFor(() => screen.getByText('Pair New Device'));

    await expect(text).toBeOnTheScreen();
  });

  it('Go through all three stages and navigate back', async () => {
    setup();

    const input = screen.getByTestId('input-device-id');

    await userEvent.type(
      input,
      'testid',
    );

    const button = screen.getByTestId('pair-device-button');

    await userEvent.press(button);

    //Stage 2
    const stageTwoText = await screen.findByText('Pairing New Device..');

    await expect(stageTwoText).toBeOnTheScreen();

    //Stage 3
    await waitFor(() => {
      jest.advanceTimersByTime(4500);
    });

    const stageThreeText = await screen.findByText('Device Paired!');

    await expect(stageThreeText).toBeOnTheScreen();

    const buttonFinish = screen.getByTestId('pair-device-button');

    await userEvent.press(buttonFinish);

    expect(mockedGoBack).toHaveBeenCalled();
  });
});
