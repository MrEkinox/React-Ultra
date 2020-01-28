import { NativeModules, NativeEventEmitter } from "react-native";
import { ProximityData } from "./interfaces";

const Proximity = NativeModules.ProximitySensor;
const proximityEventEmitter = new NativeEventEmitter(Proximity);

class ProximitySensor {
  async isSupported(): Promise<boolean> {
    return Proximity.isSupported();
  }

  addListener(listener: (data: ProximityData) => void) {
    proximityEventEmitter.addListener(
      Proximity.PROXIMITY_CHANGE_EVENT,
      listener
    );
  }

  removeListener(listener) {
    proximityEventEmitter.removeListener(
      Proximity.PROXIMITY_CHANGE_EVENT,
      listener
    );
  }
}

export default new ProximitySensor();