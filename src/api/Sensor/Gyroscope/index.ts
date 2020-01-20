import { NativeModules, NativeEventEmitter } from "react-native";
import { GyroscopeData } from "./interfaces";

const Gyroscope = NativeModules.GyroscopeSensor;
const gyroscopeEventEmitter = new NativeEventEmitter(Gyroscope);

class GyroscopeSensor {
  async isSupported(): Promise<boolean> {
    return Gyroscope.isSupported();
  }

  addListener(listener: (data: GyroscopeData) => any) {
    gyroscopeEventEmitter.addListener(
      Gyroscope.GYROSCOPE_CHANGE_EVENT,
      listener
    );
  }

  removeListener(listener) {
    gyroscopeEventEmitter.removeListener(
      Gyroscope.GYROSCOPE_CHANGE_EVENT,
      listener
    );
  }
}

export default new GyroscopeSensor();
