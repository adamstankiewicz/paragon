import * as React from "react";

function SvgCategory(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M12 2l-5.5 9h11z" fill="currentColor" />
      <circle cx={17.5} cy={17.5} r={4.5} />
      <path d="M3 13.5h8v8H3z" fill="currentColor" />
    </svg>
  );
}

export default SvgCategory;
