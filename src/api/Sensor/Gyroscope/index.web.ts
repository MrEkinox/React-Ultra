import { GyroscopeData } from "./interfaces";

class GyroscopeSensor {
  async isSupported(): Promise<boolean> {
    return "ondeviceorientation" in window;
  }

  addListener(listener: (data: GyroscopeData) => any) {
    window.addEventListener("deviceorientation", event => {
      listener({ x: event.gamma, y: event.beta, z: event.alpha });
    });
  }

  removeListener(listener) {
    window.removeEventListener("ondeviceorientation", listener);
  }
}

export default new GyroscopeSensor()