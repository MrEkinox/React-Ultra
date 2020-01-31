import { HapticType } from "./interfaces";

class Haptic {
  async isSupported(): Promise<boolean> {
    return true;
  }
  async trigger(type: HapticType): Promise<boolean> {
    return true;
  }
}

export default new Haptic();
