import React from "react";
import ThreedDesign from "../components/threedDesign";
import Head from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const lists = [
  { name: "top", path: "/" },
  { name: "3D", path: "/threedDesign" },
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
