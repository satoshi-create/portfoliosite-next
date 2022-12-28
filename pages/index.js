import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";
import { projects, demos } from "../libs/sites";
import Head from "../components/Meta";
import Grapics from "../components/GridImages";

const index = () => {
  return (
    <>
      <Head />
      <Hero />
      <About title={{ title1: "自己紹介", bcgClr: true }} />
      <Card
        value={{
          sites: demos,
          title1: "デモ",
          title2: "サイト",
          linkbtn: true,
        }}
      />
      <Grapics
        title={{ title1: "グラフィックデザイン", bcgClr: true, linkbtn: true }}
      />
      <Card
        value={{
          sites: projects,
          title1: "プロジェクト",
          title2: "サイト",
          linkbtn: true,
        }}
      />
    </>
  );
};

export default index;
