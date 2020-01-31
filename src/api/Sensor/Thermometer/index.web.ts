export default class ThermometerSensor {
  async isSupported(): Promise<boolean> {
    return false;
  }

  addListener() {}

  removeListener() {}
}
