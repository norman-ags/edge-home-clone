import React from "react";

interface MicrosoftIconProps {}

export const MicrosoftIcon: React.FC<MicrosoftIconProps> = ({}) => {
  return (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="microsoft-icon"
    >
      <path
        d="M4 15.47V1.4L0 0V17.77L4 20L14 14.25V9.7L4 15.47Z"
        fill="#757575"
      ></path>
      <path
        opacity="0.75"
        d="M9.63988 12.215L13.9999 9.69998L5.12988 6.59998L6.86488 10.925L9.63988 12.215Z"
        fill="#757575"
      ></path>
    </svg>
  );
};
