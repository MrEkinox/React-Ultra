import { GeolocationData, GeolocationOptions } from "./interfaces";

export default class Geolocation {
  isSupported(): boolean {
    return "geolocation" in navigator;
  }

  getCurrentPosition(options: GeolocationOptions): Promise<GeolocationData> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (data: any) => resolve(data),
        reject,
        options
      );
    });
  }

  watchPosition(
    options: GeolocationOptions,
    success: (data: GeolocationData) => void,
    error: (e) => void
  ): number {
    return navigator.geolocation.watchPosition(
      (data: any) => success(data),
      error,
      options
    );
  }

  clearWatch(watchId: number) {
    return navigator.geolocation.clearWatch(watchId);
  }
}
