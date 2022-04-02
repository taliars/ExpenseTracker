import React, { FC } from "react";
import Card from "./Card";
import styles from "./CenterCard.module.css";

const CenterCard: FC<{ children: string, className: string }> = ({ children, className }) => {
  return <Card className={`${styles.centercard} ${className}`}>{children}</Card>;
};

export default CenterCard;
