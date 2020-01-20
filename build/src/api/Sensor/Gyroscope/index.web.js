"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GyroscopeSensor {
    isSupported() {
        return "ondeviceorientation" in window;
    }
    addListener(listener) {
        window.addEventListener("deviceorientation", event => {
            listener({ x: event.gamma, y: event.beta, z: event.alpha });
        });
    }
    removeListener(listener) {
        window.removeEventListener("ondeviceorientation", listener);
    }
}
exports.default = GyroscopeSensor;
//# sourceMappingURL=index.web.js.map