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
class PedometerSensor {
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return "ondevicemotion" in window || "ondeviceorientation" in window;
        });
    }
    addListener(listener) {
        var steps = 0;
        var accelerateY = 0;
        var flag = false;
        window.addEventListener("devicemotion", ({ accelerationIncludingGravity }) => {
            if (accelerationIncludingGravity && accelerationIncludingGravity.y)
                accelerateY = accelerationIncludingGravity.y;
        });
        window.addEventListener("deviceorientation", ({ beta }) => {
            if (!beta)
                return;
            if (accelerateY - 10 * Math.sin((beta * Math.PI) / 180) > 1)
                flag = true;
            if (accelerateY - 10 * Math.sin((beta * Math.PI) / 180) < -1 && flag) {
                steps += 1;
                flag = false;
                listener(steps);
            }
        });
    }
    removeListener(listener) {
        window.removeEventListener("devicemotion", listener);
        window.removeEventListener("deviceorientation", listener);
    }
}
exports.default = new PedometerSensor();
//# sourceMappingURL=index.web.js.map