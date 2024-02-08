import React from "react";
import CadDesign from "../components/cadDesign";
import Head from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const lists = [
  { name: "top", path: "/" },
  { name: "3D", path: "/threedDesign" },
];

const threedDesign = () => {
  return (
    <>
      <Head />
      <Header fixed={false} />
      <Breadcrumbs lists={lists} />
      <ThreedDesign
        title={{
          title1: "3Dデザイン",
          linkbtn: false,
        }}
      />
      <Footer />
    </>
  );
};

export default threedDesign;
