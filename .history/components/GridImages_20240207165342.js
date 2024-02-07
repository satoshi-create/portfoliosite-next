import React, { useContext } from "react";
import Title from "./Title";
import styles from "../styles/GridImages.module.css";
import Image from "next/image";
import { gridImagesA } from "../libs/gridImages";
import Button from "./Button";
import { ZoomIn } from "react-feather";
import { ContextComponent } from "../libs/context";
import Modal from "./Modal";

const  = ({ title }) => {
  const { value, setValue, openModal, closeModal, isModalOpen } =
    useContext(ContextComponent);
  const { title1,title2, bcgClr, linkbtn } = title;

  // const shuffleArray = (sourceArr) => {
  //   for (let i = sourceArr.length - 1; i >= 0; i--) {
  //     const randomIndex = Math.floor(Math.random() * (i + 1));
  //     [sourceArr[i], sourceArr[randomIndex]] = [
  //       sourceArr[randomIndex],
  //       sourceArr[i],
  //     ];
  //   }
  //   return sourceArr
  // };

  // const newGridImagesA = shuffleArray(gridImagesA);

  const gridImages = (page) => {
    if (page) {
      return (
        <div className={styles.gridconteinter}>
          {gridImagesA.slice(0, 5).map((item, index) => {
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
            {gridImagesA.slice(0, 5).map((item, index) => {
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
            {gridImagesA.slice(5, 10).map((item, index) => {
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
            {gridImagesA.slice(10, 15).map((item, index) => {
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
            {gridImagesA.slice(15, 22).map((item, index) => {
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
  return (
    <section className={`section-padding ${styles.gridimages}`}>
      <Title title={{ title1, title2 }} />
      {gridImages(linkbtn)}
      {linkbtn && (
        <div className={styles.btnconteiner}>
          <Button
            value={{
              style: styles.grafhicbtn,
              title: "全てのグラフィックデザインを見る",
              path: "/graphics",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default GridImages;
