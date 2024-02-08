import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/Card";
import { projects, demos } from "../libs/sites";
import Head from "../components/Meta";
import Grapics from "../components/GridImageList";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const lists = [
  { name: "top", path: "/" },
  { name: "sites", path: "/sites" },
];

const sites = () => {
  return (
    <>
      <Head />
      <Header fixed={true} />
      <Breadcrumbs lists={lists} />
      <Card value={{ sites: demos, title1: "デモ", title2: "サイト" }} />
      {/* TODO add card bcg color */}
      <Card
        value={{
          sites: projects,
          title1: "プロジェクト",
          title2: "サイト",
        }}
      />
      <Footer />
    </>
  );
};

export default sites;
