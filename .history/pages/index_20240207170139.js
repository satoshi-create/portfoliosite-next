import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";
import { projects, demos } from "../libs/sites";
import Head from "../components/Meta";
import GraphicsDesign from "../components/GraphicsDesign";
import Header from "../components/Header";
import Footer from "../components/Footer";
import threedDesign from "../components/threedDesign";

const index = () => {
  return (
    <>
      <Head />
      <Header fixed={true} />
      <Hero />
      <About title={{ title1: "自己紹介", bcgClr: true, btn: true }} />
      <GraphicsDesign
        title={{
          title1: "グラフィック",
          title2: "デザイン",
          bcgClr: true,
          linkbtn: true,
        }}
      />
      <Card
        value={{
          sites: demos,
          title1: "デモ",
          title2: "サイト",
          linkbtn: true,
        }}
      />
      <Card
        value={{
          sites: projects,
          title1: "プロジェクト",
          title2: "サイト",
          linkbtn: true,
        }}
      />
      <Footer />
    </>
  );
};

export default index;
