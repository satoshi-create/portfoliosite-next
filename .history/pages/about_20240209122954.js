import React from "react";
import Head from "../components/Meta";
import About from "../components/About";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const lists = [
  { name: "top", path: "/" },
  { name: "about", path: "/about" },
];

const about = () => {
  return (
    <>
      <Head pagetitle={"about"} pageDesc={"アバウトページです"} />
      <Header fixed={true} />
      <Breadcrumbs lists={lists} />
      <About title={{ title1: "自己紹介", bcgClr: false, btn: false }} />
      <Footer />
    </>
  );
};

export default about;
