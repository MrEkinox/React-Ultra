import { Platform } from "react-native";

class LightSensor {
  async isSupported(): Promise<boolean> {
    if (Platform.OS === "ios") return false;
    return false;
  }

  addListener(listener: (intensity: number) => void) {}

  removeListener(listener) {}
}

export default new LightSensor();
