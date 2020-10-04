import React from "react";

interface FlexProps {
  children: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  position?: string;
  padding?: string;
  zIndex?: string;
  width?: string;
  height?: string;
}

export const Flex: React.FC<FlexProps> = ({ children, ...styles }) => {
  const style = { display: "flex", ...styles } as React.CSSProperties;
  return (
    <div style={style} className="flex">
      {children}
    </div>
  );
};
