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

  const [thumbIndex, setThumbIndex] = useState(0);

  const nextSlide = () => {
    setThumbIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > ekotobas.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setThumbIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = ekotobas.length - 1;
      }
      return index;
    });
  };

  return (
    <aside className={styles.modal}>
      <div className={styles.MuiBackdrop} onClick={closeModal}></div>
      <div className={styles.container}>
        <figure
          className={styles.figure}
          style={{ position: "relative", width: "90%", height: "90%" }}
        >
          <Image
            src={pathArr ? pathArr[thumbIndex] : path}
            layout="fill"
            // TODO next/image cover or contain ??
            objectFit={cover ? "cover" : "contain"}
            className={styles.image}
            style={{ backgroundColor: bgc ? bgc : "white" }}
            alt={nameen}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4 2mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
          />
        </figure>
        {pathArr && (
          <div className={styles.thumb}>
            {pathArr.map((item, index) => {
              return (
                <figure
                  key={index}
                  onClick={() => setThumbIndex(index)}
                  className={`${index === thumbIndex && styles.thumbFigure}`}
                >
                  <img src={item} alt={item} className={styles.thumbImg} />
                </figure>
              );
            })}
          </div>
        )}
        <button className={styles.prev} onClick={prevSlide}>
          <ArrowLeft />
        </button>
        <button className={styles.next}>
          <ArrowRight />
        </button>
      </div>
    </aside>
  );
};

export default Modal;
