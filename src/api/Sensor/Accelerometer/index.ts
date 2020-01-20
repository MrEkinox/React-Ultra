import { NativeModules, NativeEventEmitter } from "react-native";
import { AccelerometerData } from "./interfaces";

const Accelerometer = NativeModules.AccelerometerSensor;
const accelerometerEventEmitter = new NativeEventEmitter(Accelerometer);

class AccelerometerSensor {
  async isSupported(): Promise<boolean> {
    return Accelerometer.isSupported();
  }

  addListener(listener: (data: AccelerometerData) => any) {
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

export default new AccelerometerSensor();