"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StepCounter {
    isSupported() {
        return "ondevicemotion" in window || "ondeviceorientation" in window;
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
exports.default = StepCounter;
//# sourceMappingURL=index.web.js.map