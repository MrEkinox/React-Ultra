export interface ForceTouchOptions {
  onTriggered: (force: number) => void;
  maximumPossibleForce: number;
}
