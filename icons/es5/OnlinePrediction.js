function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgOnlinePrediction(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5zm-2.5 6h-2V19h2v-1.5zm9-5.5c0-2.76-1.12-5.26-2.93-7.07l-1.06 1.06A8.481 8.481 0 0120.5 12c0 2.34-.95 4.47-2.49 6.01l1.06 1.06A9.969 9.969 0 0022 12zM3.5 12c0-2.34.95-4.47 2.49-6.01L4.93 4.93A9.969 9.969 0 002 12c0 2.76 1.12 5.26 2.93 7.07l1.06-1.06A8.481 8.481 0 013.5 12zm14 0c0 1.52-.62 2.89-1.61 3.89l1.06 1.06A6.976 6.976 0 0019 12c0-1.93-.78-3.68-2.05-4.95l-1.06 1.06c.99 1 1.61 2.37 1.61 3.89zM7.05 16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89s.62-2.89 1.61-3.89L7.05 7.05A6.976 6.976 0 005 12c0 1.93.78 3.68 2.05 4.95z",
    fill: "currentColor"
  }));
}

export default SvgOnlinePrediction;