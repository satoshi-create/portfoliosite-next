import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";
import {projects,demos} from "../libs/sites"

const index = () => {
  return (
    <>
      <Hero />
      <About title={{ title1: "自己紹介" }} />
      <Card
        value={{ sites: projects, title1: "プロジェクト", title2: "サイト" }}
      />
      <Card value={{ sites: demos, title1: "デモ", title2: "サイト" }} />
    </>
  );
};

export default index;
