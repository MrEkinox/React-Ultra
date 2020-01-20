import { QuickActionOptions } from "./interfaces";

export default class QuickActions {
  async isSupported(): Promise<boolean> {
    return false;
  }

  async set(options: QuickActionOptions[]) {}

  async clear() {}
}
