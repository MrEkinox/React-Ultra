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
class AccelerometerSensor {
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return "ondevicemotion" in window;
        });
    }
    addListener(listener) {
        window.addEventListener("devicemotion", ({ acceleration }) => {
            listener({
                x: acceleration ? acceleration.x : 0,
                y: acceleration ? acceleration.y : 0,
                z: acceleration ? acceleration.z : 0
            });
        });
    }
    removeListener(listener) {
        window.removeEventListener("ondevicemotion", listener);
    }
}
exports.default = AccelerometerSensor;
//# sourceMappingURL=index.web.js.map