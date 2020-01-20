import { BatteryData } from "./interfaces";

class BatterySensor {
  navigator: any = navigator;
  battery =
    this.navigator.battery ||
    this.navigator.mozBattery ||
    this.navigator.webkitBattery;

  async isSupported(): Promise<boolean> {
    return this.battery !== null && this.battery !== undefined;
  }

  async isCharging(): Promise<boolean> {
    return this.battery.charging;
  }

  async getLevel(): Promise<number> {
    return this.battery.level * 100;
  }

  addListener(listener: (data: BatteryData) => void) {
    var data: BatteryData = {
      level: 0,
      charging: false
    };
    this.battery.addEventListener("chargingchange", (event: any) => {
      data = { ...data, charging: event.charging };
      listener(data);
    });
    this.battery.addEventListener("levelchange", (event: any) => {
      data = { ...data, level: event.level };
      listener(data);
    });
  }

  removeListener(listener) {
    window.removeEventListener("chargingchange", listener);
    window.removeEventListener("levelchange", listener);
  }
}

export default new BatterySensor();