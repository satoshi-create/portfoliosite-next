import React, { useContext } from "react";
import styles from "../styles/Modal.module.css";
import { ContextComponent } from "../libs/context";
import { gridImagesA } from "../libs/gridImages";

const Modal = () => {
  const { value, setValue, closeModal } = useContext(ContextComponent);
  console.log(value);

  // const arr = () => {
  //   if (cat === "gridImagesA") {
  //     return gridImagesA;
  //   } else {
  //     return gridImagesB;
  //   }
  // };

  const { name } = gridImagesA[value - 1];

  return (
    <aside className={styles.modal}>
      <div className={styles.MuiBackdrop} onClick={closeModal}></div>
      <div className={styles.name}>{name}</div>
    </aside>
  );
};

export default Modal;
