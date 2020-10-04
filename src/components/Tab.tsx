import React, { useEffect } from "react";
import { List } from "../containers/List";
import { news } from "../data/news";
import { Card } from "./Card";
import "../styles/tab.css";

interface TabProps {}

export const Tab: React.FC<TabProps> = ({}) => {
  return (
    <div className="main center">
      <div className="contents">
        <List>
          <li className="active">My Feed</li>
          <li>Personalize</li>
        </List>
        <div className="col-3">
          <Card news={news[0]} />
          <Card news={news[1]} />
          <Card news={news[2]} />
          <Card news={news[3]} />
          <Card news={news[4]} />
          <Card news={news[5]} />
          <Card news={news[0]} />
          <Card news={news[1]} />
          <Card news={news[2]} />
        </div>
      </div>
    </div>
  );
};
