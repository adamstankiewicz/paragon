import * as React from "react";

function SvgChair(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M7 13h10V7h3V3H4v4h3z" fill="currentColor" />
      <path
        d="M23 9h-4v6H5V9H1v10h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1h3V9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChair;
