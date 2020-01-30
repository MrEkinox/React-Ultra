import { NativeModules, NativeEventEmitter } from "react-native";

const Pedometer = NativeModules.PedometerSensor;
const pedometerEventEmitter = new NativeEventEmitter(Pedometer);

class PedometerSensor {
  async isSupported(): Promise<boolean> {
    return Pedometer.isSupported();
  }

  addListener(listener: (steps: number) => any) {
    pedometerEventEmitter.addListener(
      Pedometer.PEDOMETER_CHANGE_EVENT,
      listener
    );
  }

  removeListener(listener) {
    pedometerEventEmitter.removeListener(
      Pedometer.PEDOMETER_CHANGE_EVENT,
      listener
    );
  }
}

export default new PedometerSensor();
