// React
import React from 'react';
// RN Testing lib
import {RenderResult, screen, waitFor} from '@testing-library/react-native';
import {
  renderWithProviders,
} from '../../utils/testing/test-util';
import '@testing-library/react-native/extend-expect';
// Component
import {DeviceViewScreen} from './index';

jest.useFakeTimers();

describe('Device View', () => {
  const setup = (): RenderResult =>
    renderWithProviders(<DeviceViewScreen />);

  it('Should render', async () => {
    setup();

    await waitFor(() => expect(screen.getByTestId('device-view-container')).toBeOnTheScreen());
  });

});
