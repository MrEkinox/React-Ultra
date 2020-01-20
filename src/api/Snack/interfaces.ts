import { StyleProp, TextStyle } from "react-native";

export interface SnackButton {
  visible?: boolean;
  enabled?: boolean;
  text?: SnackText | string;
  icon?: any;
  style?: StyleProp<TextStyle>;
}

export interface SnackText {
  text: string;
  style?: StyleProp<TextStyle>;
}

export interface SnackOptions {
  style?: StyleProp<TextStyle>;
  message: SnackText | string;
  vertical?: "bottom" | "center" | "top";
  horizontal?: "right" | "center" | "left";
  animated?: boolean;
  buttons?: SnackButton[];
  closeButton?: SnackButton;
  duration?: number;
  tintColor?: string;
}
