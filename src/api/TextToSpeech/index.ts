import { TTSVoice } from "./interfaces";

class TextToSpeech {
  async isSupported(): Promise<boolean> {
    return true;
  }
  async getVoices(): Promise<TTSVoice[]> {
    return [];
  }
  async getEngines(): Promise<string[]> {
    return [];
  }
  async setDefaultEngine(engineName: string): Promise<boolean> {
    return true;
  }
  async requestInstallData(): Promise<boolean> {
    return true;
  }
  async speak(text: string): Promise<boolean> {
    return true;
  }
  async stop(): Promise<boolean> {
    return true;
  }
  async initialize(): Promise<boolean> {
    return true;
  }
  async setDucking(state: boolean): Promise<boolean> {
    return true;
  }
  async setDefaultLanguage(language: string): Promise<boolean> {
    return true;
  }
  async setDefaultVoice(voiceId: string): Promise<boolean> {
    return true;
  }
  async setDefaultRate(
    rate: number,
    skipTransform?: boolean
  ): Promise<boolean> {
    return true;
  }
  async setDefaultPitch(pitch: number): Promise<boolean> {
    return true;
  }
  async setIgnoreSilentSwitch(state: boolean): Promise<boolean> {
    return true;
  }
  addListener() {}
  removeListener() {}
}

export default new TextToSpeech();
