import React from "react";

import "./header.scss";

interface HeaderProps {
  info: React.ReactNode;
}

export const Header = (props: HeaderProps) => {
  const { info } = props;
  return (
    <h1 className="header">
      Rick and Morty Info Cards <span className="header__info">({info})</span>
    </h1>
  );
};
