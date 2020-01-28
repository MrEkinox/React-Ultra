import { NativeModules, NativeEventEmitter } from "react-native";
import { MagnetometerData } from "./interfaces";

const Magnetometer = NativeModules.MagnetometerSensor;
const magnetometerEventEmitter = new NativeEventEmitter(Magnetometer);

class MagnetometerSensor {
  async isSupported(): Promise<boolean> {
    return Magnetometer.isSupported();
  }

  addListener(listener: (data: MagnetometerData) => any) {
    magnetometerEventEmitter.addListener(
      Magnetometer.MAGNETOMETER_CHANGE_EVENT,
      listener
    );
  }

  removeListener(listener) {
    magnetometerEventEmitter.removeListener(
      Magnetometer.MAGNETOMETER_CHANGE_EVENT,
      listener
    );
  }
}

export default new MagnetometerSensor();
