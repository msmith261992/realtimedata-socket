// React
import React from 'react';
// Testing
import {
  render,
  screen,
  userEvent,
  waitFor,
} from '@testing-library/react-native';
import {TextInput, TextInputProps} from './index';
// RN testing Library
import '@testing-library/react-native/extend-expect';

const defaultProps: TextInputProps = {
  testID: 'text-input',
  placeholder: 'placeholder',
  onTextChange: jest.fn(),
  value: 'text input test',
};

describe('Text Input tests', () => {
  it('text input renders correctly', async () => {
    render(<TextInput {...defaultProps} />);

    expect(await screen.findByTestId('text-input')).toBeOnTheScreen();
  });

  it('display text input correctly & change text', async () => {
    render(<TextInput {...defaultProps} value="" />);

    const input = screen.getByTestId('text-input');

    await userEvent.type(input, 'new value');

    await waitFor(() => expect(defaultProps.onTextChange).toHaveBeenCalled());
  });
});
