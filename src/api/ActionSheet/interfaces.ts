import { StyleProp, TextStyle, ImageStyle } from "react-native";

//https://github.com/dillidon/alerts-and-pickers

export interface ActionSheetButton {
  text: ActionSheetText | string;
  image?: ActionSheetTextImage;
  style?: ActionSheetStyle;
  type?: "default" | "cancel" | "destructive";
  onPress?: (data) => any;
}

export interface ActionSheetText {
  text: string;
  style?: ActionSheetStyle;
}

export interface ActionSheetStyle {
  alignment?: "left" | "center" | "right";
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamilly: string;
}

export interface ActionSheetTextFieldsOptions {}

export interface ActionSheetCellItem {
  title: ActionSheetText | string;
  images?: ActionSheetImage;
  subtitle?: ActionSheetText | string;
}

export interface ActionSheetCellPickerOptions {
  items: ActionSheetCellItem[];
  searchbar?: ActionSheetSearchbar;
  withHeader?: boolean;
  quickScroll?: boolean;
  selectable?: boolean;
  multiple?: boolean;
  closeOnSelect?: boolean;
}

export interface ActionSheetCustomOptions {
  renderContent: () => any;
}

export interface ActionSheetImage {
  source: any;
  selectable?: boolean;
  selected?: boolean;
  onSelect: () => any;
}

export interface ActionSheetImagesOptions {
  fromLibrary?: boolean;
  images?: ActionSheetImage;
  paging?: boolean;
  horizontal?: boolean;
  columns?: number;
  onPermissionError?: () => any;
}

export interface ActionSheetSearchbar {
  visible?: boolean;
  placeholder?: string;
}

export interface ActionSheetContactsOptions {
  selectable?: boolean;
  multiple?: boolean;
  closeOnSelect?: boolean;
  withHeader?: boolean;
  quickScroll?: boolean;
  searchbar?: ActionSheetSearchbar;
  onPermissionError?: () => any;
}

export interface ActionSheetLocationOptions {
  location?: string;
  searchbar?: ActionSheetSearchbar;
  selectable?: boolean;
  onSelect?: (data) => any;
  onPermissionError?: () => any;
}

export interface ActionSheetColorPickerOptions {
  color: string;
  shape?: "circle" | "square" | "roundsquare";
  showCode?: boolean;
  range?: {
    luminosity?: {
      visible?: boolean;
      enabled?: boolean;
    };
    contrast?: {
      visible?: boolean;
      enabled?: boolean;
    };
    color?: {
      visible?: boolean;
      enabled?: boolean;
    };
  };
}

export interface ActionSheetTextImage {
  source: any;
  placement?: "before" | "after";
  style?: StyleProp<ImageStyle>;
}

export interface ActionSheetPickerItem {
  label: string;
  value: string;
  image?: ActionSheetTextImage;
  style?: ActionSheetText;
}

export interface ActionSheetPickerOptions {
  horizontal?: boolean;
  enabled?: boolean;
  selected?: string;
  itemStyle?: StyleProp<TextStyle>;
  items: ActionSheetPickerItem[] | Array<ActionSheetPickerItem[]>;
  onValueChange: (itemValue: string, itemPosition: number) => any;
}

export interface ActionSheetDatePickerOptions {
  date?: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  minuteInterval?: string;
  onDateChange?: (date: Date) => any;
  mode?: "date" | "time" | "datetime" | "countdown";
}

export interface ActionSheetOptions {
  title?: ActionSheetText | string;
  message?: ActionSheetText | string;
  buttons: ActionSheetButton[];
  style?: ActionSheetStyle;
  animated?: boolean;
  vibrate?: boolean;
  onButtonPress?: (data, index: number) => any;
  onOpen?: () => void;
  onClose?: (data) => void;
}
