import * as React from "react";

function SvgSmartButton(props) {
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
        d="M22 17h-3v-2h1V9H4v6h6v2H2V7h20v10zm-7.5 2l1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5l.62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62L17 14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmartButton;
