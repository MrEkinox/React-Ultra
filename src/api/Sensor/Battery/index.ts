import { NativeModules, NativeEventEmitter } from "react-native";
import { BatteryData } from "./interfaces";

const Battery = NativeModules.BatterySensor;
const batteryEventEmitter = new NativeEventEmitter(Battery);

class BatterySensor {
  async isSupported(): Promise<boolean> {
    return Battery.isSupported();
  }

  async isCharging(): Promise<boolean> {
    return Battery.isCharging();
  }

  async getLevel(): Promise<number> {
    return Battery.getLevel();
  }

  addListener(listener: (data: BatteryData) => any) {
    batteryEventEmitter.addListener(Battery.BATTERY_CHANGE_EVENT, listener);
  }

  removeListener(listener) {
    batteryEventEmitter.removeListener(Battery.BATTERY_CHANGE_EVENT, listener);
  }
}

export default new BatterySensor();
