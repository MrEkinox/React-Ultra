export interface BiometricsOptions {
  promptMessage: string;
  cancelButtonText: string;
}

export type BiometricType = "TouchID" | "FaceID" | "Other" | undefined;
