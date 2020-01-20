import { GyroscopeData } from "./interfaces";

export default class GyroscopeSensor {
  isSupported(): boolean {
    return "ondeviceorientation" in window;
  }

  addListener(listener: (data: GyroscopeData) => void) {
    window.addEventListener("deviceorientation", event => {
      listener({ x: event.gamma, y: event.beta, z: event.alpha });
    });
  }

  removeListener(listener) {
    window.removeEventListener("ondeviceorientation", listener);
  }
}
