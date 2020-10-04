import React from "react";
import { News } from "../types/News";
import { generatePreview } from "../utils/generateImageUrl";
import { Provider } from "./Provider";

interface CardProps {
  news: News;
}

export const Card: React.FC<CardProps> = ({
  news: { sourceHref, images, title, provider, tags },
}) => {
  return (
    <div className="content">
      <img className="preview" alt="" src={generatePreview(images![0].id!)} />
      <div className="content-bottom">
        <small className="x2 upper bold">{tags![0].displayName}</small>
        <a href={sourceHref}>{title}</a>
        <Provider id={provider!.logo!.id} name={provider!.name} />
      </div>
    </div>
  );
};
