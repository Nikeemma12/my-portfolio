import { useState } from "react";
import styles from "./card.module.css";
import { FaHtml5, FaReact, FaCss3 } from "react-icons/fa";
function Card({ Icon, name, color, about }) {
  return (
    <div className={styles.container} style={{ color: color }}>
      <Icon style={{ fontSize: "8em", alignSelf: "center" }} />
      <h3>{name}</h3>
      <p>{about}</p>
    </div>
  );
}
export default Card;
