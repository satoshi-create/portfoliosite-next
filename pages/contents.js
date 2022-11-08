import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";
import { projects, demos } from "../libs/sites";
import Head from "../components/Meta";
import Grapics from "../components/GridImages";
import Breadcrumbs from "../components/Breadcrumbs";

const lists = [
  { name: "top", path: "/" },
  { name: "contents", path: "/about" },
];

const contents = () => {
  return (
    <>
      <Head />
      <Breadcrumbs lists={lists} />
      <Card value={{ sites: demos, title1: "デモ", title2: "サイト" }} />
      <Card
        value={{
          sites: projects,
          title1: "プロジェクト",
          title2: "サイト",
          bcgClr: true,
        }}
      />
      <Grapics title={{ title1: "グラフィックデザイン", bcgClr: false }} />
    </>
  );
};

export default contents;
