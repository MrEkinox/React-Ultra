import { NativeModules, NativeEventEmitter } from "react-native";
import { BarometerData } from "./interfaces";

const Barometer = NativeModules.BarometerSensor;
const barometerEventEmitter = new NativeEventEmitter(Barometer);

class BarometerSensor {
  async isSupported(): Promise<boolean> {
    return Barometer.isSupported();
  }

  addListener(listener: (data: BarometerData) => any) {
    barometerEventEmitter.addListener(
      Barometer.BAROMETER_CHANGE_EVENT,
      listener
    );
  }

  removeListener(listener) {
    barometerEventEmitter.removeListener(
      Barometer.BAROMETER_CHANGE_EVENT,
      listener
    );
  }
}

export default new BarometerSensor();
