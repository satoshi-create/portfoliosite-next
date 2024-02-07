import React, { useContext } from "react";
import Image from "next/image";
import { graphicsDesignImages } from "../libs/graphicsDesignImages";
import { threedDesignImages } from "../libs/threedDesignImages";
import { ZoomIn } from "react-feather";
import Modal from "./Modal";
import { ContextComponent } from "../libs/context";
import styles from "../styles/GridImages.module.css";
import ImagesDataJSON from "../libs/images-data.json";
import { parseJSONdata, filterdImages } from "../func/func";

const GridImages = ({ props }) => {
  const { linkbtn, cat } = props;
  const { value, setValue, openModal, closeModal, isModalOpen } =
    useContext(ContextComponent);

  const ImagesData = parseJSONdata(ImagesDataJSON);

  console.log(cat);

  if (linkbtn) {
    return (
      <div className={styles.gridconteinter}>
        {filterdImages(cat, ImagesData)
          .slice(0, 5)
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
                  {/* <figure className={styles.tooliconfigure}>
                    {icon.map((item, i) => {
                      return (
                        <img
                          src={item.src}
                          alt={item.name}
                          className={styles.tool}
                          key={i}
                        />
                      );
                    })}
                  </figure> */}
                  <figure
                    className={styles.zoomiconfigure}
                    onClick={() => openModal(id)}
                  >
                    <ZoomIn className={styles.zoomicon} />
                  </figure>
                </div>
                {isModalOpen && <Modal />}
              </figure>
            );
          })}
      </div>
    );
  } else {
    return (
      <>
        <div className={styles.gridconteinter}>
          {filterdImages(cat, ImagesData)
            .slice(0, 5)
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
                    {/* <figure className={styles.tooliconfigure}>
                      {icon.map((item, i) => {
                        return (
                          <img
                            src={item.src}
                            alt={item.name}
                            className={styles.tool}
                            key={i}
                          />
                        );
                      })}
                    </figure> */}
                    <figure
                      className={styles.zoomiconfigure}
                      onClick={() => openModal(id)}
                    >
                      <ZoomIn className={styles.zoomicon} />
                    </figure>
                  </div>
                  {isModalOpen && <Modal cat={"gridImagesA"} />}
                </figure>
              );
            })}
        </div>
        <div className={styles.gridconteinterB}>
          {filterdImages(cat, ImagesData)
            .slice(5, 10)
            .map((item, index) => {
              const { id, path, name, nameen, icon, bgc } = item;
              return (
                <figure className={styles.figureB} key={index}>
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
                    {/* <figure className={styles.tooliconfigure}>
                      {icon.map((item, i) => {
                        return (
                          <img
                            src={item.src}
                            alt={item.name}
                            className={styles.tool}
                            key={i}
                          />
                        );
                      })}
                    </figure> */}
                    <figure
                      className={styles.zoomiconfigure}
                      onClick={() => openModal(id)}
                    >
                      <ZoomIn className={styles.zoomicon} />
                    </figure>
                  </div>
                  {isModalOpen && <Modal cat={"gridImagesB"} />}
                </figure>
              );
            })}
        </div>
        <div className={styles.gridconteinterB}>
          {filterdImages(cat, ImagesData)
            .slice(10, 15)
            .map((item, index) => {
              const { id, path, name, nameen, icon, bgc } = item;
              return (
                <figure className={styles.figureB} key={index}>
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
                    {/* <figure className={styles.tooliconfigure}>
                      {icon.map((item, i) => {
                        return (
                          <img
                            src={item.src}
                            alt={item.name}
                            className={styles.tool}
                            key={i}
                          />
                        );
                      })}
                    </figure> */}
                    <figure
                      className={styles.zoomiconfigure}
                      onClick={() => openModal(id)}
                    >
                      <ZoomIn className={styles.zoomicon} />
                    </figure>
                  </div>
                  {isModalOpen && <Modal cat={"gridImagesA"} />}
                </figure>
              );
            })}
        </div>
        <div className={styles.gridconteinter}>
          {filterdImages(cat, ImagesData)
            .slice(15, 22)
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
                    {/* <figure className={styles.tooliconfigure}>
                      {icon.map((item, i) => {
                        return (
                          <img
                            src={item.src}
                            alt={item.name}
                            className={styles.tool}
                            key={i}
                          />
                        );
                      })}
                    </figure> */}
                    <figure
                      className={styles.zoomiconfigure}
                      onClick={() => openModal(id)}
                    >
                      <ZoomIn className={styles.zoomicon} />
                    </figure>
                  </div>
                  {isModalOpen && <Modal cat={"gridImagesB"} />}
                </figure>
              );
            })}
        </div>
      </>
    );
  }
};

export default GridImages;
