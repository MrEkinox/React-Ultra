export interface PromptButton {
  text: string;
  type?: "default" | "cancel" | "destructive";
  onPress?: (value: string) => void;
}

export interface PromptInput {
  placeholder?: string;
  defaultValue?: string;
  type?: "plain-text" | "secure-text";
  keyboardType?: string;
}

export interface PromptOptions {
  title?: string;
  message?: string;
  buttons: PromptButton[];
  inputs: PromptInput[];
}
