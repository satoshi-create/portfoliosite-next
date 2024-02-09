import React from "react";
import GraphicsDesign from "../components/GraphicsDesign";
import Head from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CadDesign from "../components/CadDesign";
import ThreedDesign from "../components/threedDesign";

const lists = [
  { name: "top", path: "/" },
  { name: "grafhics", path: "/grafhics" },
];

const grafhics = () => {
  return (
    <>
      <Head pagetitle={"Grafhics"} pageDesc={"グラフィックページです"} />
      <Header fixed={false} />
      <Breadcrumbs lists={lists} />
      <CadDesign
        title={{
          title1: "CAD",
          title2: "デザイン",
          linkbtn: false,
          fontClr: "var(--primary-green-01)",
        }}
      />
      <ThreedDesign
        title={{
          title1: "3D",
          title2: "デザイン",
          linkbtn: false,
          fontClr: "var(--primary-green-01)",
        }}
      />
      <GraphicsDesign
        title={{
          title1: "グラフィック",
          title2: "デザイン",
          linkbtn: false,
          fontClr: "var(--primary-green-01)",
        }}
      />
      <Footer />
    </>
  );
};

export default grafhics;
