import React from "react";
import styles from "../styles/Hero.module.css";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="parts-grid">
      <div className={styles.box}>
        <figure
          style={{ position: "relative", width: "100%", height: "80vh" }}
          className={styles.heroFigure}
        >
          <Image
            src="/hero.png"
            layout="fill"
            objectFit="cover"
            className={styles.heroImg}
            alt="hero-image"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
          />
        </figure>

        <div className={styles.title}>
          <h1>縁</h1>
          <h1>側</h1>
          <h1>工</h1>
          <h1>房</h1>
          <div className={styles.engawaline}>
            <div className={`${styles.line} ${styles.yoko}`}></div>
            <div className={`${styles.line} ${styles.tate}`}></div>
          </div>
        </div>
        <h2 className={`${styles.catch} ${styles.catch1}`}>MARGINAL</h2>
        <h2 className={`${styles.catch} ${styles.catch2}`}>DESIGN</h2>
        <SocialLinks value={{ styleUl: styles.heroLinks }} />
        <Button
          value={{
            style: styles.herobtn,
            title: "作品を見る",
            path: "/contents",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
