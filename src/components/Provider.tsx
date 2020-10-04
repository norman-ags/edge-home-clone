import React from "react";
import { generateProviderIcon } from "../utils/generateImageUrl";
import BookMarkIcon from "./icon/BookMarkIcon";
import EllipsisIcon from "./icon/EllipsisIcon";

interface ProviderProps {
  id?: string;
  name?: string;
}

export const Provider: React.FC<ProviderProps> = ({ id, name }) => {
  return (
    <div className="content-provider">
      <div>
        <img alt="" src={generateProviderIcon(id!)} />
        <small>{name}</small>
      </div>
      <div>
        <BookMarkIcon />
        <EllipsisIcon />
      </div>
    </div>
  );
};
