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
class ImagePicker {
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var input = document.createElement("input");
                input.type = "file";
                input.onchange = (e) => {
                    var file = e.target.files[0];
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = ({ target }) => {
                        if (target)
                            resolve(target.result);
                        else
                            reject("ImagePicker ERROR");
                    };
                };
                input.click();
            });
        });
    }
}
exports.default = ImagePicker;
//# sourceMappingURL=index.web.js.map