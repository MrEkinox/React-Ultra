import { AlertOptions } from "./interfaces";

export default class Alert {
  async open(options: AlertOptions): Promise<String> {
    return "actionSheetID";
  }
  async close(actionSheetID) {}
}
