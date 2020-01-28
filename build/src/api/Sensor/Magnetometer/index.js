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
const Magnetometer = react_native_1.NativeModules.MagnetometerSensor;
const accelerometerEventEmitter = new react_native_1.NativeEventEmitter(Magnetometer);
class MagnetometerSensor {
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return Magnetometer.isSupported();
        });
    }
    addListener(listener) {
        accelerometerEventEmitter.addListener(Magnetometer.MAGNETOMETER_CHANGE_EVENT, listener);
    }
    removeListener(listener) {
        accelerometerEventEmitter.removeListener(Magnetometer.ACCELEROMETER_CHANGE_EVENT, listener);
    }
}
exports.default = new MagnetometerSensor();
//# sourceMappingURL=index.js.map