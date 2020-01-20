import {
  ActionSheetOptions,
  ActionSheetPickerOptions,
  ActionSheetDatePickerOptions,
  ActionSheetImagesOptions,
  ActionSheetContactsOptions,
  ActionSheetColorPickerOptions,
  ActionSheetLocationOptions,
  ActionSheetCustomOptions
} from "./interfaces";

export default class ActionSheet {
  async open(options: ActionSheetOptions): Promise<string> {
    return "actionSheetId";
  }
  async openTextField(): Promise<string> {
    return "actionSheetId";
  }
  async openDatePicker(
    options: ActionSheetOptions & ActionSheetDatePickerOptions
  ): Promise<string> {
    return "actionSheetId";
  }
  async openPicker(
    options: ActionSheetOptions & ActionSheetPickerOptions
  ): Promise<string> {
    return "actionSheetId";
  }
  async openCellPicker(
    options: ActionSheetOptions & ActionSheetPickerOptions
  ): Promise<string> {
    return "actionSheetId";
  }
  async openImage(
    options: ActionSheetOptions & ActionSheetImagesOptions
  ): Promise<string> {
    return "actionSheetId";
  }
  async openColorPicker(
    options: ActionSheetOptions & ActionSheetColorPickerOptions
  ): Promise<string> {
    return "actionSheetId";
  }
  async openLocation(
    options: ActionSheetOptions & ActionSheetLocationOptions
  ): Promise<string> {
    return "actionSheetId";
  }
  async openContacts(
    options: ActionSheetOptions & ActionSheetContactsOptions
  ): Promise<string> {
    return "actionSheetId";
  }
  async openCustom(
    options: ActionSheetOptions & ActionSheetCustomOptions
  ): Promise<string> {
    return "actionSheetId";
  }
  async close(actionSheetId) {}
}
