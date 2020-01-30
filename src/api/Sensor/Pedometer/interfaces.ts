export interface PedometerData {
  numberOfSteps?: number | null;
  //Only IOS
  distance?: number | null;
  //Only IOS
  averageActivePace?: number | null;
  //Only IOS
  currentPace?: number | null;
  //Only IOS
  floorsAscended?: number | null;
  //Only IOS
  floorsDescended?: number | null;
}
