export type CastState =
  | "NoDevicesAvailable"
  | "NotConnected"
  | "Connecting"
  | "Connected";

export interface CastDevice {
  id: string;
  model: string;
  name: string;
  version: string;
}

export interface CastMedia {
  mediaUrl: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  studio: string;
  streamDuration: number;
  contentType: string;
  playPosition: string;
  customData?: Object;
}
