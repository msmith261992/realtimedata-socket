// React
import React from 'react';
// Testing
import {
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
// Components
import {ConditionSquare, ConditionSquareProps} from './index';
// RN testing Library
import '@testing-library/react-native/extend-expect';

const defaultProps: ConditionSquareProps = {
  backgroundColor: 'red',
};

describe('Condition Square', () => {
  it('renders', async () => {
    render(<ConditionSquare {...defaultProps} />);

    await waitFor(() => expect(screen.getByTestId('condition-square')).toBeOnTheScreen());
  });

  it('has correct background color from prop', async () => {
    render(
      <ConditionSquare {...defaultProps} backgroundColor="white" />,
    );

    expect(await screen.getByTestId('condition-square')).toHaveStyle({
      backgroundColor: 'white',
    });
  });

  it('has correct border radius', async () => {
    render(
      <ConditionSquare {...defaultProps} />,
    );

    expect(await screen.getByTestId('condition-square')).toHaveStyle({
      borderRadius: 16,
    });
  });

});
