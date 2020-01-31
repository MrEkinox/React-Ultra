import { QuickActionItems } from "./interfaces";

class QuickActions {
  async isSupported(): Promise<boolean> {
    return false;
  }

  async set(options: QuickActionItems[]) {}

  async clear() {}
}

export default new QuickActions()