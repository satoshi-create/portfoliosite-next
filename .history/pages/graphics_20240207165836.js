import React from "react";
import Grapics from "../components/";
import Head from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const lists = [
  { name: "top", path: "/" },
  { name: "grafhics", path: "/grafhics" },
];

const grafhics = () => {
  return (
    <>
      <Head />
      <Header fixed={false} />
      <Breadcrumbs lists={lists} />
      <Grapics
        title={{
          title1: "グラフィックデザイン",
          bcgClr: false,
          linkbtn: false,
        }}
      />
      <Footer />
    </>
  );
};

export default grafhics;
