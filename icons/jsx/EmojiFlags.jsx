import * as React from "react";

function SvgEmojiFlags(props) {
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
        d="M14 9l-1-2H7V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V21h2v-4h5l1 2h7V9h-6zm4 8h-4l-1-2H7V9h5l1 2h5v6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEmojiFlags;
