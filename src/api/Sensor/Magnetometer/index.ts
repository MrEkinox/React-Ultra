import { NativeModules, NativeEventEmitter } from "react-native";
import { MagnetometerData } from "./interfaces";

const Magnetometer = NativeModules.MagnetometerSensor;
const accelerometerEventEmitter = new NativeEventEmitter(Magnetometer);

class MagnetometerSensor {
  async isSupported(): Promise<boolean> {
    return Magnetometer.isSupported();
  }

  addListener(listener: (data: MagnetometerData) => any) {
    accelerometerEventEmitter.addListener(
      Magnetometer.MAGNETOMETER_CHANGE_EVENT,
      listener
    );
  }

  removeListener(listener) {
    accelerometerEventEmitter.removeListener(
      Magnetometer.ACCELEROMETER_CHANGE_EVENT,
      listener
    );
  }
}

export default new MagnetometerSensor();
