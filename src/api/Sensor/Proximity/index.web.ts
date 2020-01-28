import { ProximityData } from "./interfaces";

export default class ProximitySensor {
  async isSupported(): Promise<boolean> {
    return "ondeviceproximity" in window || "onuserproximity" in window;
  }

  addListener(listener: (data: ProximityData) => void) {
    var data = {
      isNear: false,
      distance: 0,
      minDistance: 0,
      maxDistance: 0
    };
    window.addEventListener("deviceproximity", (event: any) => {
      data = {
        ...data,
        distance: event.value,
        maxDistance: event.max,
        minDistance: event.min
      };
      listener(data);
    });
    window.addEventListener("userproximity", (event: any) => {
      data = { ...data, isNear: event.near };
      listener(data);
    });
  }

  removeListener(listener) {
    window.removeEventListener("deviceproximity", listener);
    window.removeEventListener("userproximity", listener);
  }
}
