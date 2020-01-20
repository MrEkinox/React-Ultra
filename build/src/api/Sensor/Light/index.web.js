"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightSensor {
    isSupported() {
        return "ondevicelight" in window;
    }
    addListener(listener) {
        window.addEventListener("devicelight", (event) => {
            listener(event.value);
        });
    }
    removeListener(listener) {
        window.removeEventListener("devicelight", listener);
    }
}
exports.default = LightSensor;
//# sourceMappingURL=index.web.js.map