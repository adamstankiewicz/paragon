function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgStroller(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03L5.27 17H17V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7h2zm-7.7-2.9a8.962 8.962 0 00-9.58.62l4.89 4.89L14.3 4.1z",
    fill: "currentColor"
  }));
}

export default SvgStroller;