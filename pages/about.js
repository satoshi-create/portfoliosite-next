import React from "react";
import Head from "../components/Meta"
import About from "../components/About";

const about = () => {
  return (
    <>
      <Head pagetitle={"アバウト"} pageDesc={"アバウトページです"} />
      <About title={{ title1: "自己紹介", bcgClr: false }} />
    </>
  );
};

export default about;
