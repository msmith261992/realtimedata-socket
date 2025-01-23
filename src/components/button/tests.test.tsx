// React
import React from 'react';
// Testing
import {
  render,
  screen,
  userEvent,
  waitFor,
} from '@testing-library/react-native';
// Components
import {Button, ButtonProps} from './index';
// RN testing Library
import '@testing-library/react-native/extend-expect';

const defaultProps: ButtonProps = {
  testID: 'button',
  text: 'hello',
  backgroundColor: 'red',
  onPress: jest.fn(),
  disabled: false,
};

describe('Button', () => {
  it('display button & press', async () => {
    render(<Button {...defaultProps} />);

    await userEvent.press(screen.getByTestId('button'));

    await waitFor(() => expect(defaultProps.onPress).toHaveBeenCalled());
  });

  it('button has correct background color', async () => {
    render(
      <Button {...defaultProps} backgroundColor="white" />,
    );

    await waitFor(() => expect(screen.getByTestId('button')).toHaveStyle({
      backgroundColor: 'white',
    }));
  });

  it('button shows correct styles when disabled', async () => {
    render(<Button {...defaultProps} disabled={true} />);

    expect(await screen.getByTestId('button')).toHaveStyle({opacity: 0.25});
  });
});
