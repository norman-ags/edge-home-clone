import React from "react";
import { MenuIcon } from "./icon/MenuIcon";
import GiSettingsKnobs from "./icon/GiSettingsKnobs";
import { MicrosoftIcon } from "./icon/MicrosoftIcon";
import { Flex } from "../containers/Flex";
import SearchIcon from "./icon/SearchIcon";
import DropDownIcon from "./icon/DropDownIcon";
import ExpandIcon from "./icon/ExpandIcon";
import "../styles/nav.css";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <nav>
      <Flex
        zIndex="1"
        padding="50px 0px"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
      >
        <MenuIcon />
        <div className="search">
          <input placeholder="Search the web" />
          <MicrosoftIcon />
          <SearchIcon />
        </div>
        <GiSettingsKnobs />
      </Flex>
      <div className="links">
        <Flex height="25px" alignItems="center">
          Quick Links
          <DropDownIcon />
        </Flex>
        <Flex height="25px" alignItems="center">
          <ExpandIcon /> Like this Image?
        </Flex>
      </div>
    </nav>
  );
};
