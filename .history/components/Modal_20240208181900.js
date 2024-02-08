import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import { ContextComponent } from "../libs/context";
import ImagesDataJSON from "../libs/images-data.json";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-feather";
import { parseJSONdata } from "../func/func";

const Modal = () => {
  const { value, closeModal } = useContext(ContextComponent);
  console.log(value);

  const ImagesData = parseJSONdata(ImagesDataJSON);

  const modalData = ImagesData.find((data) => data.name === value);

  const { name, path, pathArr, nameen, bgc, cover } = modalData;

  return (
    <aside className={styles.modal}>
      <div className={styles.MuiBackdrop} onClick={closeModal}></div>
      <div className={styles.container}>
        <figure
          className={styles.figure}
          style={{ position: "relative", width: "90%", height: "90%" }}
        >
          <Image
            src={path}
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
        <button className={styles.prev}>
          <ArrowLeft />
        </button>
        <button className={styles.next}>
          <ArrowRight />
        </button>
        {pathArr && (
          <div className="thumb">
            {pathArr.map((item, index) => {
              return (
                <figure key={index}>
                  <img src={item} alt={item} className="thumb-img" />
                </figure>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Modal;
