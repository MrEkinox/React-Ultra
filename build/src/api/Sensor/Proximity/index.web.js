"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProximitySensor {
    isSupported() {
        return "ondeviceproximity" in window || "onuserproximity" in window;
    }
    addListener(listener) {
        var data = {
            isNear: false,
            distance: 0,
            minDistance: 0,
            maxDistance: 0
        };
        window.addEventListener("deviceproximity", (event) => {
            data = Object.assign(Object.assign({}, data), { distance: event.value, maxDistance: event.max, minDistance: event.min });
            listener(data);
        });
        window.addEventListener("userproximity", (event) => {
            data = Object.assign(Object.assign({}, data), { isNear: event.near });
            listener(data);
        });
    }
    removeListener(listener) {
        window.removeEventListener("deviceproximity", listener);
        window.removeEventListener("userproximity", listener);
    }
}
exports.default = ProximitySensor;
//# sourceMappingURL=index.web.js.map