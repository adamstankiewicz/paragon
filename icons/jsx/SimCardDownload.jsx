import * as React from "react";

function SvgSimCardDownload(props) {
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
        d="M20 2H10L4 8v14h16V2zm-8 15l-4-4h3V9.02L13 9v4h3l-4 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSimCardDownload;
