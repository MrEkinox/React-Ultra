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
class TextToSpeech {
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    getVoices() {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    getEngines() {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    setDefaultEngine(engineName) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    requestInstallData() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    speak(text) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    setDucking(state) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    setDefaultLanguage(language) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    setDefaultVoice(voiceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    setDefaultRate(rate, skipTransform) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    setDefaultPitch(pitch) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    setIgnoreSilentSwitch(state) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    addListener() { }
    removeListener() { }
}
exports.default = new TextToSpeech();
//# sourceMappingURL=index.js.map