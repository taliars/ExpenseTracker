import React, { FC } from "react";
import CenterCard from "./CenterCard";
import styles from "./LoadingCard.module.css";

const LoadingCard: FC<{ children: string }> = ({ children }) => {
  return <CenterCard className={styles.loading}>{children}</CenterCard>;
};

export default LoadingCard;
