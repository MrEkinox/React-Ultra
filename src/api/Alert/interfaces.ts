export interface AlertButton {
  text: string;
  type?: "default" | "cancel" | "destructive";
  onPress?: () => void;
}

export interface AlertOptions {
  title?: string;
  message?: string;
  buttons: AlertButton[];
}
