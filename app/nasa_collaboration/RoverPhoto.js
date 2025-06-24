import React from "react";
import styles from "./RoverPhoto.module.css";
const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles["rover-card"]}>
      <img
        className={styles["rover-photo-img"]}
        src={src}
        alt={`Rover photo taken on ${date}`}
      />
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
    </div>
  );
};

export default RoverPhoto;
