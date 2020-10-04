import React from "react";

interface ListProps {
  children?: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => {
  return <ul className="flex">{children}</ul>;
};
