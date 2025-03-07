import * as React from "react";

function SvgFastRewind(props) {
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
        d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFastRewind;
