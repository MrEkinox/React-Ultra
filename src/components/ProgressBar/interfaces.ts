export interface ProgressBarProps {
  value: number;
  buffer?: number;
  tintColor?: string;
  reversed?: boolean;
  type?: "determinate" | "indeterminate";
}
