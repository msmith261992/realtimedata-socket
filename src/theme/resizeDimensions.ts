/**
 * Defines correct ratio for screen size.
 */
// RN
import { Dimensions } from 'react-native';

const baseWidth = 375;
const baseHeight = 812;
const { width, height } = Dimensions.get('screen');
const wpx = (size: number): number => (width / baseWidth) * size;
const hpx = (size: number): number => (height / baseHeight) * size;

export { wpx, hpx };
