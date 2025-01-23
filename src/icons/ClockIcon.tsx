import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { baseTheme } from '../theme/baseTheme';

interface ClockIconProps {
  color?: string;
}

export const ClockIcon = ({
  color = baseTheme.colors.black,
}: ClockIconProps): React.ReactElement => (
  <Svg width={22} height={22} viewBox="0 0 20 20" fill="none">
    <Path
      d="M20.7 11.5l-2-2-2 2M19 10a9 9 0 11-1.245-4.57M10 5v5l3 2"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
