"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Geolocation {
    isSupported() {
        return "geolocation" in navigator;
    }
    getCurrentPosition(options) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((data) => resolve(data), reject, options);
        });
    }
    watchPosition(options, success, error) {
        return navigator.geolocation.watchPosition((data) => success(data), error, options);
    }
    clearWatch(watchId) {
        return navigator.geolocation.clearWatch(watchId);
    }
}
exports.default = Geolocation;
//# sourceMappingURL=index.web.js.map