class BarometerSensor {
  async isSupported(): Promise<boolean> {
    return false;
  }
}

export default new BarometerSensor();
