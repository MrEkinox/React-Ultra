import { BiometricType, BiometricsOptions } from "./interfaces";

export default class Biometrics {
  async sensorAvailable(): Promise<BiometricType> {
    return "FaceID";
  }

  async createSignature(options: BiometricsOptions) {}
}
