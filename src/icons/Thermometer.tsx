
// React
import React from 'react';
// Packages
import Svg, { Path } from 'react-native-svg';
// Theme
import { baseTheme } from '../theme/baseTheme';

interface PlusIconProps {
  testID?: string;
  color?: string;
  width?: number;
  height?: number;
}

export const ThermometerIcon = ({
  color = baseTheme.colors.black,
  width = 24,
  height = 24,
  testID,
}: PlusIconProps): React.ReactElement => (
  <Svg testID={testID} width={width} height={height} viewBox="0 0 48 48" fill="none">
    <Path
      d="M28 31.26V8a4 4 0 0 0-8 0v23.26a7 7 0 1 0 8 0zM26 13h2M26 17h2M26 21h2M26 25h2"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

