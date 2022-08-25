import React from "react";
import styles from "../../styles/emaki.module.css";
import "lazysizes";

const emaki = () => {
  return (
      <div className={styles.conteiner}>
        <div className="box">
          <picture>
            <source
              data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
              type="image/webp"
            />
            <img
              decoding="async"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              className="lazyload"
              alt="emaki"
            />
          </picture>
        </div>
        <div className="box">
          <picture>
            <source
              data-srcset="/cyoujyuu_yamazaki_kou_02-1080.webp"
              type="image/webp"
            />
            <img
              decoding="async"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              className="lazyload"
              alt="emaki"
            />
          </picture>
        </div>
        <div className="box">
          <picture>
            <source
              data-srcset="/cyoujyuu_yamazaki_kou_03-1080.webp"
              type="image/webp"
            />
            <img
              decoding="async"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              className="lazyload"
              alt="emaki"
            />
          </picture>
        </div>
        <div className="box">
          <picture>
            <source
              data-srcset="/cyoujyuu_yamazaki_kou_04-1080.webp"
              type="image/webp"
            />
            <img
              decoding="async"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              className="lazyload"
              alt="emaki"
            />
          </picture>
        </div>
        <div className="box">
          <picture>
            <source
              data-srcset="/cyoujyuu_yamazaki_kou_05-1080.webp"
              type="image/webp"
            />
            <img
              decoding="async"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              className="lazyload"
              alt="emaki"
            />
          </picture>
        </div>
        <div className="box">
          <picture>
            <source
              data-srcset="/cyoujyuu_yamazaki_kou_06-1080.webp"
              type="image/webp"
            />
            <img
              decoding="async"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              className="lazyload"
              alt="emaki"
            />
          </picture>
        </div>
      </div>
  );
};

export default emaki;
