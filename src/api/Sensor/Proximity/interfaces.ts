export interface ProximityData {
  isNear: boolean;
  //No for IOS
  distance: number;
  //Only for web
  minDistance: number;
  //No for IOS
  maxDistance: number;
}
