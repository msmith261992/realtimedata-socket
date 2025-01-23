
// React
import React from 'react';
// Packages
import Svg, { Path } from 'react-native-svg';
// Theme
import { baseTheme } from '../theme/baseTheme';

interface PlusIconProps {
  color?: string;
  width?: number;
  height?: number;
}

export const PlusIcon = ({
  color = baseTheme.colors.black,
  width = 24,
  height = 24,
}: PlusIconProps): React.ReactElement => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 5v14m-7-7h14"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
