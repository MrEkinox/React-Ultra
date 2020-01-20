export interface RangeProps {
  value: number;
  step?: number;
  pin?: boolean;
  thumbImage?: any;
  trackImage?: any;
  inverted?: boolean;
  disabled?: boolean;
  dualKnobs?: boolean;
  minimumValue?: number;
  maximumValue?: number;
  thumbTintColor?: string;
  maximumTrackImage?: any;
  minimumTrackImage?: any;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  onSlidingStart?: () => any;
  onSlidingComplete?: () => any;
  onValueChange?: () => any;
}
