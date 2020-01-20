"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Battery = react_native_1.NativeModules.BatterySensor;
const batteryEventEmitter = new react_native_1.NativeEventEmitter(Battery);
class BatterySensor {
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return Battery.isSupported();
        });
    }
    isCharging() {
        return __awaiter(this, void 0, void 0, function* () {
            return Battery.isCharging();
        });
    }
    getLevel() {
        return __awaiter(this, void 0, void 0, function* () {
            return Battery.getLevel();
        });
    }
    addListener(listener) {
        batteryEventEmitter.addListener(Battery.BATTERY_CHANGE_EVENT, listener);
    }
    removeListener(listener) {
        batteryEventEmitter.removeListener(Battery.BATTERY_CHANGE_EVENT, listener);
    }
}
exports.default = new BatterySensor();
//# sourceMappingURL=index.js.map