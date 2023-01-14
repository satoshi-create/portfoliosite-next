import React from "react";
import Grapics from "../components/GridImages";
import Head from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";

const lists = [
  { name: "top", path: "/" },
  { name: "grafhics", path: "/grafhics" },
];

const grafhics = () => {
  return (
    <>
      <Head />
      <Breadcrumbs lists={lists} />
      <Grapics
        title={{
          title1: "グラフィックデザイン",
          bcgClr: false,
          linkbtn: false,
        }}
      />
    </>
  );
};

export default grafhics;
