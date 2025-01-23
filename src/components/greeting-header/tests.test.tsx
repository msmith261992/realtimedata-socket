// React
import React from 'react';
// Testing
import {
  render,
  screen,
} from '@testing-library/react-native';
// Components
import {GreetingHeader, GreetingHeaderProps} from './index';
// RN testing Library
import '@testing-library/react-native/extend-expect';

const defaultProps: GreetingHeaderProps = {
  name: 'Matt',
};

describe('Greeting Header', () => {
  it('renders', async () => {
    render(<GreetingHeader {...defaultProps}  />);

    expect(await screen.findByTestId('greeting-text')).toBeOnTheScreen();
  });

  it('renders and displays correct name', async () => {
    render(<GreetingHeader {...defaultProps}  />);

    expect(await screen.findByText('Hello, Matt 👋')).toBeOnTheScreen();
  });
});
