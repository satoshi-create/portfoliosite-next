import React from "react";
import GraphicsDesign from "../components/GraphicsDesign";
import Head from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CadDesign from "../components/CadDesign";
import threedDesign from "./cad";

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
      <CadDesign
        title={{
          title1: "CADデザイン",
          linkbtn: false,
        }}
      />
      <ThreedDesign
        title={{
          title1: "3Dデザイン",
          linkbtn: false,
        }}
      />
      <GraphicsDesign
        title={{
          title1: "グラフィックデザイン",
          linkbtn: false,
        }}
      />
      <Footer />
    </>
  );
};

export default grafhics;
