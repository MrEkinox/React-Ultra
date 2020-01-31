class ActivitySensor {
  async isSupported(): Promise<boolean> {
    return false;
  }
}

export default new ActivitySensor();
