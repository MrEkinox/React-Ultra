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
class GoogleCast {
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    showIntroductoryOverlay() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    launchExpandedControls() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            return "NoDevicesAvailable";
        });
    }
    getCurrentDevice() {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getDevices() {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    castMedia(media) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    play() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    pause() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    seek(playPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    setVolume(volume) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    endSession() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    initChannel(channelUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    sendMessage(channelUrl, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    showCastPicker() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    toggleSubtitles() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    addListener() { }
    removeListener() { }
}
exports.default = new GoogleCast();
//# sourceMappingURL=index.js.map