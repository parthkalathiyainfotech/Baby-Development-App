import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const FullWidth = width
export const FullHeight = height
// Calculate responsive width based on percentage
export const RWidth = (percentage) => {
  const calculatedWidth = (percentage * width) / 100;
  return Math.round(calculatedWidth);
};

// Calculate responsive height based on percentage
export const RHeight = (percentage) => {
  const calculatedHeight = (percentage * height) / 100;
  return Math.round(calculatedHeight);
};

// Calculate responsive font size
export const responsiveFontSize = (size) => {
  const ratio = PixelRatio.getFontScale();
  return Math.round(size * ratio);
};

//use example height:Rheight(4)