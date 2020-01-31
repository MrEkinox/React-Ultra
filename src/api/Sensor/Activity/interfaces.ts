export type ActivityType =
  | "AUTOMOTIVE"
  | "CYCLING"
  | "RUNNING"
  | "WALKING"
  | "STATIONARY"
  | "UNKNOWN";

export interface ActivityData {
  type: ActivityType;
  confidence: number;
}
