import { SettingsType } from "./interfaces";
class Settings {
  async isSupported(): Promise<boolean> {
    return true;
  }
  get(settingsType: SettingsType) {}
  open(settingsType?: SettingsType) {}
  addListener(settingsType: SettingsType, listener) {}
  removeListener(settingsType: SettingsType, listener) {}
}

export default new Settings();
