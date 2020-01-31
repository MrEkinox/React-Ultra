class LightSensor {
  async isSupported(): Promise<boolean> {
    return "ondevicelight" in window;
  }

  addListener(listener: (intensity: number) => void) {
    window.addEventListener("devicelight", (event: any) => {
      listener(event.value);
    });
  }

  removeListener(listener) {
    window.removeEventListener("devicelight", listener);
  }
}

export default new LightSensor()
