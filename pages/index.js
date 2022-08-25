import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";

const project = [
  {
    title: "横スクロールで楽しむ絵巻物",
    src: "/thumb-project.png",
    url: "https://emakimono.com/",
    tag: ["html", "css", "javascript"],
    githubUrl: "https://github.com/satoshi-create/emakimono",
  },
  {
    title: "横スクロールで楽しむ絵巻物",
    src: "/thumb-project.png",
    url: "https://emakimono.com/",
    tag: ["html", "css", "javascript"],
    githubUrl: "https://github.com/satoshi-create/emakimono",
  },
];

const demo = [
  {
    title: "Sky Transport",
    src: "/thumb-demo.png",
    url: "https://sky-transport.netlify.app/",
    tag: ["html", "css", "react", "gatsby"],
    githubUrl: "https://github.com/satoshi-create/SkyTransport",
  },
  {
    title: "Sky Transport",
    src: "/thumb-demo.png",
    url: "https://sky-transport.netlify.app/",
    tag: ["html", "css", "react", "gatsby"],
    githubUrl: "https://github.com/satoshi-create/SkyTransport",
  },
];

const index = () => {
  return (
    <>
      <Hero />
      <About />
      <Card value={{ sites: project, title: "プロジェクトサイト" }} />
      <Card value={{ sites: demo, title: "デモサイト" }} />
    </>
  );
};

export default index;
