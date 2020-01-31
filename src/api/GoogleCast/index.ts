import { CastState, CastDevice, CastMedia } from "./interfaces";

class GoogleCast {
  async isSupported(): Promise<boolean> {
    return true;
  }
  async showIntroductoryOverlay(): Promise<boolean> {
    return true;
  }
  async launchExpandedControls(): Promise<boolean> {
    return true;
  }
  async getState(): Promise<CastState> {
    return "NoDevicesAvailable";
  }
  async getCurrentDevice(): Promise<CastDevice | null> {
    return null;
  }
  async getDevices(): Promise<CastDevice[] | null> {
    return null;
  }
  async castMedia(media: CastMedia): Promise<boolean> {
    return true;
  }
  async play(): Promise<boolean> {
    return true;
  }
  async pause(): Promise<boolean> {
    return true;
  }
  async seek(playPosition: number): Promise<boolean> {
    return true;
  }
  async setVolume(volume: number): Promise<boolean> {
    return true;
  }
  async stop(): Promise<boolean> {
    return true;
  }
  async endSession(): Promise<boolean> {
    return true;
  }
  async initChannel(channelUrl: string): Promise<boolean> {
    return true;
  }
  async sendMessage(channelUrl: string, message: string): Promise<boolean> {
    return true;
  }
  async showCastPicker(): Promise<boolean> {
    return true;
  }
  async toggleSubtitles(): Promise<boolean> {
    return true;
  }
  addListener() {}
  removeListener() {}
}

export default new GoogleCast();
