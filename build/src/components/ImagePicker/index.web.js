"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class ImagePicker extends react_1.default.PureComponent {
    render() {
        const { children, multiple, onPick } = this.props;
        return (react_1.default.createElement("label", { style: {
                position: "relative",
                width: "fit-content"
            } },
            children,
            react_1.default.createElement("input", { type: "file", multiple: multiple, accept: "image/*", onChange: ({ target }) => onPick(multiple ? target.files : target.files && target.files.item(0)), style: { visibility: "hidden", position: "absolute" } })));
    }
}
exports.default = ImagePicker;
//# sourceMappingURL=index.web.js.map