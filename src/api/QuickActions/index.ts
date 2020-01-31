import { NativeModules } from "react-native";
import { QuickActionItems } from "./interfaces";

const QuickActionsSystem = NativeModules.QuickActions;

class QuickActions {
  async isSupported(): Promise<boolean> {
    return QuickActionsSystem.isSupported();
  }

  async set(items: QuickActionItems[]) {
    return QuickActionsSystem.set(items);
  }

  async clear() {
    return QuickActionsSystem.clear();
  }
}

export default new QuickActions();
