function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgDiscount(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.79 21L3 11.21v2.83l9.79 9.79 9.04-9.04-1.42-1.41z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9.04l9.79 9.79 9.04-9.04L12.04 0H3v9.04zM7.25 3a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z",
    fill: "currentColor"
  }));
}

export default SvgDiscount;