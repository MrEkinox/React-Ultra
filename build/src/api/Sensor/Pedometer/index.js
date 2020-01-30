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
const Pedometer = react_native_1.NativeModules.PedometerSensor;
const pedometerEventEmitter = new react_native_1.NativeEventEmitter(Pedometer);
class PedometerSensor {
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return Pedometer.isSupported();
        });
    }
    addListener(listener) {
        pedometerEventEmitter.addListener(Pedometer.PEDOMETER_CHANGE_EVENT, listener);
    }
    removeListener(listener) {
        pedometerEventEmitter.removeListener(Pedometer.PEDOMETER_CHANGE_EVENT, listener);
    }
}
exports.default = new PedometerSensor();
//# sourceMappingURL=index.js.map