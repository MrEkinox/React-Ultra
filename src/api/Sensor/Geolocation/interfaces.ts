export interface GeolocationData {
  coords: {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  timestamp: number;
}

export interface GeolocationOptions {
  enableHighAccuracy: boolean;
  maximumAge: number;
  timeout: number;
}
