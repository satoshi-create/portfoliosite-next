import React from "react";
import GraphicsDesign from "../components/GraphicsDesign";
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
      <GraphicsDesign
        title={{
          title1: "3Dデザイン",
          linkbtn: false,
        }}
      />
      <Footer />
    </>
  );
};

export default grafhics;
