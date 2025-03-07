import * as React from "react";

function SvgBattery80(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillOpacity={0.3}
        d="M17 4h-3V2h-4v2H7v5h10V4z"
        fill="currentColor"
      />
      <path d="M7 9v13h10V9H7z" fill="currentColor" />
    </svg>
  );
}

export default SvgBattery80;
