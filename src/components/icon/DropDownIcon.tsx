import * as React from "react";

function DropDownIcon(props: any) {
  return (
    <span className="transparent-circle center">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1.8em"
        width="1.8em"
        {...props}
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
        </g>
      </svg>
    </span>
  );
}

export default DropDownIcon;
