import { StyleProp, TextStyle } from "react-native";

export interface ToastButton {
  visible?: boolean;
  enabled?: boolean;
  text?: ToastText | string;
  icon?: any;
  style?: StyleProp<TextStyle>;
}

export interface ToastText {
  text: string;
  style?: StyleProp<TextStyle>;
}

export interface ToastOptions {
  style?: StyleProp<TextStyle>;
  message: ToastText | string;
  vertical?: "bottom" | "center" | "top";
  horizontal?: "right" | "center" | "left";
  animated?: boolean;
  buttons?: ToastButton[];
  closeButton?: ToastButton;
  duration?: number;
  tintColor?: string;
}
