import { AccelerometerData } from "./interfaces";

class AccelerometerSensor {
  async isSupported(): Promise<boolean> {
    return "ondevicemotion" in window;
  }

  addListener(listener: (data: AccelerometerData) => any) {
    window.addEventListener("devicemotion", ({ acceleration }) => {
      listener({
        x: acceleration ? acceleration.x : 0,
        y: acceleration ? acceleration.y : 0,
        z: acceleration ? acceleration.z : 0
      });
    });
  }

  removeListener(listener) {
    window.removeEventListener("ondevicemotion", listener);
  }
}

export default new AccelerometerSensor();