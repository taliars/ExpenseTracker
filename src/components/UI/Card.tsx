import React, { FC } from "react";
import "./Card.css";

const Card: FC<{
  children: React.ReactNode;
  className?: string;
}> = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
