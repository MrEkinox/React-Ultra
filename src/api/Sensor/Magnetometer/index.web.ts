import { MagnetometerData } from "./interfaces";


class MagnetometerSensor {
  async isSupported(): Promise<boolean> {
    return false
  }

  addListener(listener: (data: MagnetometerData) => any) {
  }

  removeListener(listener) {
  }
}

export default new MagnetometerSensor();
