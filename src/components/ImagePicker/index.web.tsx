import React from "react";
import { ImagePickerOptions } from "./interfaces";

export default class ImagePicker extends React.PureComponent<
  ImagePickerOptions
> {
  render() {
    const { children, multiple, onPick } = this.props;
    return (
      <label
        style={{
          position: "relative",
          width: "fit-content"
        }}
      >
        {children}
        <input
          type="file"
          multiple={multiple}
          accept="image/*"
          onChange={({ target }) =>
            onPick(
              multiple ? target.files : target.files && target.files.item(0)
            )
          }
          style={{ visibility: "hidden", position: "absolute" }}
        ></input>
      </label>
    );
  }
}
