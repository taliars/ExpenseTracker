import React, { FC } from "react";
import CenterCard from "./CenterCard";
import styles from "./ErrorCard.module.css";

const ErrorCard: FC<{ children: string }> = ({ children }) => {
  return <CenterCard className={styles.error}>{children}</CenterCard>;
};

export default ErrorCard;
