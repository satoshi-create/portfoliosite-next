import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";
import { projects, demos } from "../libs/sites";
import Head from "../components/Meta";
import Grapics from "../components/GridImages";

const contents = () => {
  return (
    <>
      <Head />
      <Card value={{ sites: demos, title1: "デモ", title2: "サイト" }} />
      <Grapics title={{ title1: "グラフィックデザイン", bcgClr: false }} />
      <Card
        value={{ sites: projects, title1: "プロジェクト", title2: "サイト" }}
      />
    </>
  );
};

export default contents;
