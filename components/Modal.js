import React, { useContext } from "react";
import styles from "../styles/Modal.module.css";
import { ContextComponent } from "../libs/context";
import { gridImagesA, gridImagesB, gridImagesC } from "../libs/gridImages";

const Modal = ({ cat }) => {
  console.log(cat);
  const { value, setValue, closeModal } = useContext(ContextComponent);

  const arr = () => {
    if (cat === "gridImagesA") {
      return gridImagesA;
    } else {
      return gridImagesB;
    }
  };

  const { name } = arr(cat)[value];

  return (
    <aside className={styles.modal}>
      <div className={styles.MuiBackdrop} onClick={closeModal}></div>
      <div className={styles.name}>{name}</div>
    </aside>
  );
};

export default Modal;
