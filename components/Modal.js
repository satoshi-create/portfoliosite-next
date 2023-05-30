import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import { ContextComponent } from "../libs/context";
import { gridImagesA } from "../libs/gridImages";
import Image from "next/image";
import { ToggleLeft, ToggleRight } from "react-feather";

const Modal = () => {
  const { value, setValue, closeModal } = useContext(ContextComponent);
  console.log(value);

  const [toggleBtn, setToggleBtn] = useState(true);
  console.log(toggleBtn);

  useEffect(() => {
    setToggleBtn(true);
  }, []);

  const { name, path, pathred, nameen, bgc, cover } = gridImagesA[value - 1];

  return (
    <aside className={styles.modal}>
      <div className={styles.MuiBackdrop} onClick={closeModal}></div>
      <div className={styles.container}>
        <figure
          className={styles.figure}
          style={{ position: "relative", width: "90%", height: "90%" }}
        >
          <Image
            src={toggleBtn ? pathred : path}
            layout="fill"
            objectFit={cover ? "cover" : "contain"}
            className={styles.image}
            style={{ backgroundColor: bgc ? bgc : "white" }}
            alt={nameen}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4 2mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
          />
        </figure>
        {pathred && (
          <div className={styles.togglebtncontainer}>
            <p
              className={
                toggleBtn
                  ? ` ${styles.togglefont}`
                  : `${styles.active}${styles.togglefont}`
              }
            >
              黒絵
            </p>
            <figure
              className={`button ${styles.togglebtn}`}
              onClick={() => setToggleBtn(!toggleBtn)}
            >
              {toggleBtn ? (
                <ToggleRight className={styles.toggleIcon} />
              ) : (
                <ToggleLeft className={styles.toggleIcon} />
              )}
            </figure>
            <p
              className={
                toggleBtn
                  ? `${styles.active}${styles.togglefont}`
                  : ` ${styles.togglefont}`
              }
            >
              赤絵
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Modal;
