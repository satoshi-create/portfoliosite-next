import React from "react";
import Head from "../components/Meta";
import About from "../components/About";
import Breadcrumbs from "../components/Breadcrumbs";

const lists = [
  { name: "top", path: "/" },
  { name: "about", path: "/about" },
];

const about = () => {
  return (
    <>
      <Head pagetitle={"アバウト"} pageDesc={"アバウトページです"} />
      <Breadcrumbs lists={lists} />
      <About title={{ title1: "自己紹介", bcgClr: false }} />
    </>
  );
};

export default about;
