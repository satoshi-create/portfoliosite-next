import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";
import { projects, demos } from "../libs/sites";
import Head from "../components/Meta";
import GraphicsDesign from "../components/GraphicsDesign";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThreedDesign from "../components/threedDesign";
import CadDesign from "../components/CadDesign";
import Skills from "../components/Skills";

const index = () => {
  return (
    <>
      <Head />
      <Header fixed={true} />
      <Hero />
      <About title={{ title1: "自己紹介", bcgClr: true, btn: true }} />
      {/* <Skills title={{ title1: "スキル", bcgClr: true, btn: true }} /> */}
      <ThreedDesign
        title={{
          title1: "3D",
          title2: "デザイン",
          fontClr: "var(--primary-green-01)",
          linkbtn: true,
        }}
      />
      <Card
        value={{
          sites: demos,
          title1: "デモ",
          title2: "サイト",
          fontClr: "var(--primary-blue-01)",
          bcgClr: "var(--primary-blue-02)",
          iconBcgClr: "var(--primary-blue-01)",
          iconFontClr: "var(--primary-blue-02)",
          linkbtn: true,
        }}
      />
      <Card
        value={{
          sites: projects,
          title1: "プロジェクト",
          title2: "サイト",
          fontClr: "var(--primary-blue-01)",
          bcgClr: "var(--primary-blue-02)",
          iconBcgClr: "var(--primary-blue-01)",
          iconFontClr: "var(--primary-blue-02)",
          linkbtn: true,
        }}
      />
      <GraphicsDesign
        title={{
          title1: "グラフィック",
          title2: "デザイン",
          fontClr: "var(--primary-green-01)",
          linkbtn: true,
        }}
      />

      <CadDesign
        title={{
          title1: "CAD",
          title2: "デザイン",
          fontClr: "var(--primary-green-01)",
          linkbtn: true,
        }}
      />
      <Footer />
    </>
  );
};

export default index;
