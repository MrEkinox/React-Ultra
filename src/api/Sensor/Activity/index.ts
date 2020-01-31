import { NativeModules, NativeEventEmitter } from "react-native";
import { ActivityData } from "./interfaces";

const Activity = NativeModules.ActivitySensor;
const activityEventEmitter = new NativeEventEmitter(Activity);

class ActivitySensor {
  async isSupported(): Promise<boolean> {
    return Activity.isSupported();
  }

  addListener(listener: (data: ActivityData[]) => any) {
    activityEventEmitter.addListener(Activity.ACTIVITY_CHANGE_EVENT, listener);
  }

  removeListener(listener) {
    activityEventEmitter.removeListener(Activity.ACTIVITY_CHANGE_EVENT, listener);
  }
}

export default new ActivitySensor();
