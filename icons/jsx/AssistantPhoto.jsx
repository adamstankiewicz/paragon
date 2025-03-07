import * as React from "react";

function SvgAssistantPhoto(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" fill="currentColor" />
    </svg>
  );
}

export default SvgAssistantPhoto;
