import React, { useContext } from "react";
import styles from "../styles/Modal.module.css";
import { ContextComponent } from "../libs/context";
import { gridImagesA } from "../libs/gridImages";
import Image from "next/image";

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

  const { name, path, nameen,bgc } = gridImagesA[value - 1];

  return (
    <aside className={styles.modal}>
      <div className={styles.MuiBackdrop} onClick={closeModal}></div>
      <div className={styles.container}>
        {/* <h4 className={styles.name}>{name}</h4> */}
        <figure
          className={styles.figure}
          style={{ position: "relative", width: "90%", height: "90%" }}
        >
          <Image
            src={path}
            layout="fill"
            objectFit="contain"
            className={styles.image}
            style={{ backgroundColor: bgc }}
            alt={nameen}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
          />
        </figure>
      </div>
    </aside>
  );
};

export default Modal;
