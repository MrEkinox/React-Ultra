export interface StepperProps {
  value: number;
  minimumValue?: number;
  maximumValue?: number;
  steps?: number;
  displayValue?: boolean;
  tintColor?: string;
  vertical?: boolean;
  textColor?: string;
  onValueChange?: (value: number) => any;
  onIncrement?: (value: number) => any;
  onDecrement?: (value: number) => any;
  onMinimumReached?: (value: number) => any;
  onMaximumReached?: (value: number) => any;
}
