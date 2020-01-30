import { PedometerData } from "./interfaces";
class PedometerSensor {
  async isSupported(): Promise<boolean> {
    return "ondevicemotion" in window || "ondeviceorientation" in window;
  }

  addListener(listener: (data: PedometerData) => void) {
    var numberOfSteps = 0;
    var accelerateY = 0;
    var flag = false;
    window.addEventListener(
      "devicemotion",
      ({ accelerationIncludingGravity }) => {
        if (accelerationIncludingGravity && accelerationIncludingGravity.y)
          accelerateY = accelerationIncludingGravity.y;
      }
    );
    window.addEventListener("deviceorientation", ({ beta }) => {
      if (!beta) return;
      if (accelerateY - 10 * Math.sin((beta * Math.PI) / 180) > 1) flag = true;
      if (accelerateY - 10 * Math.sin((beta * Math.PI) / 180) < -1 && flag) {
        numberOfSteps += 1;
        flag = false;
        listener({ numberOfSteps });
      }
    });
  }

  removeListener(listener) {
    window.removeEventListener("devicemotion", listener);
    window.removeEventListener("deviceorientation", listener);
  }
}

export default new PedometerSensor();
