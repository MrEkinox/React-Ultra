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
class Contacts {
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    getAll(searchedText, withPhotos) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    getById(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    getByPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    getByEmailAddress(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    getCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return 0;
        });
    }
    getPhotoForId(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            return "";
        });
    }
    add(contactData) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
    openForm(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
    openExisting(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
    update(contactId, contactData) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
    delete(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
}
exports.default = new Contacts();
//# sourceMappingURL=index.js.map