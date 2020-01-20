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
class BatterySensor {
    constructor() {
        this.navigator = navigator;
        this.battery = this.navigator.battery ||
            this.navigator.mozBattery ||
            this.navigator.webkitBattery;
    }
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.battery !== null && this.battery !== undefined;
        });
    }
    isCharging() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.battery.charging;
        });
    }
    getLevel() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.battery.level;
        });
    }
    addListener(listener) {
        var data = {
            level: 0,
            charging: false
        };
        this.battery.addEventListener("chargingchange", (event) => {
            data = Object.assign(Object.assign({}, data), { charging: event.charging });
            listener(data);
        });
        this.battery.addEventListener("levelchange", (event) => {
            data = Object.assign(Object.assign({}, data), { level: event.level });
            listener(data);
        });
    }
    removeListener(listener) {
        window.removeEventListener("chargingchange", listener);
        window.removeEventListener("levelchange", listener);
    }
}
exports.BatterySensor = BatterySensor;
//# sourceMappingURL=index.web.js.map