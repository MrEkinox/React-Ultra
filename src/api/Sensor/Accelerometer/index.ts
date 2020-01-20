import { NativeModules, NativeEventEmitter } from "react-native";
import { AccelerometerData } from "./interfaces";

const Accelerometer = NativeModules.AccelerometerSensor;
const accelerometerEventEmitter = new NativeEventEmitter(Accelerometer);

export default class AccelerometerSensor {
  async isSupported(): Promise<boolean> {
    return Accelerometer.isSupported();
  }

  addListener(listener: (data: AccelerometerData) => void) {
    accelerometerEventEmitter.addListener(
      Accelerometer.ACCELEROMETER_CHANGE_EVENT,
      listener
    );
  }

  removeListener(listener) {
    accelerometerEventEmitter.removeListener(
      Accelerometer.ACCELEROMETER_CHANGE_EVENT,
      listener
    );
  }
}
