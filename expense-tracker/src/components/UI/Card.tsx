import React, { FC } from "react";
import styles from "./Card.module.css";

const Card: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ className, children }) => {
  const classes = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
