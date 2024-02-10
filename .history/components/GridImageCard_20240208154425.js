import React, { useContext } from "react";
import ImagesDataJSON from "../libs/images-data.json";
import { parseJSONdata, filterdImages } from "../func/func";
import { threedDesignImages } from "../libs/threedDesignImages";
import Image from "next/image";
import { graphicsDesignImages } from "../libs/graphicsDesignImages";
import { ZoomIn } from "react-feather";
import Modal from "./Modal";
import { ContextComponent } from "../libs/context";
import styles from "../styles/GridImageCard.module.css";

const GridImageCard = ({ props, sliceNum }) => {
  console.log(props, sliceNum);

  const { a, b } = sliceNum;
  const { cat } = props;
  const ImagesData = parseJSONdata(ImagesDataJSON);
  const { openModal, isModalOpen } = useContext(ContextComponent);
  console.log(filterdImages(cat, ImagesData));

  return (
    <>
      {/* {filterdImages(cat, ImagesData).map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })} */}
      {filterdImages(cat, ImagesData)
        .slice(a, b)
        .map((item, index) => {
          const { id, path, name, nameen, icon, bgc } = item;
          return (
            <figure className={styles.figure} key={index}>
              <Image
                src={path}
                layout="fill"
                objectFit="cover"
                className={styles.image}
                style={{
                  backgroundColor: bgc ? bgc : "var(--primary-green-01)",
                }}
                alt={nameen}
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
              />
              <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <figure className={styles.tooliconfigure}>
                {icon.map((item, i) => {
                  return (
                 
                  );
                })}
              </figure>
                <figure
                  className={styles.zoomiconfigure}
                  onClick={() => openModal(name)}
                >
                  <ZoomIn className={styles.zoomicon} />
                </figure>
              </div>
              {isModalOpen && <Modal />}
            </figure>
          );
        })}
    </>
  );
};

export default GridImageCard;