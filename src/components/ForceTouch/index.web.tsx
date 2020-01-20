import React from "react";
import { ForceTouchOptions } from "./interfaces";

export default class ForceTouch extends React.PureComponent<ForceTouchOptions> {
  render() {
    return this.props.children;
  }
}
