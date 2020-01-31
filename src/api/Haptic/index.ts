import { NativeModules } from "react-native";
import { HapticType } from "./interfaces";

const HapticSystem = NativeModules.Haptic;

class Haptic {
  async isSupported(): Promise<boolean> {
    return HapticSystem.isSupported();
  }
  async trigger(type: HapticType): Promise<boolean> {
    return HapticSystem.trigger(type);
  }
}

export default new Haptic();
