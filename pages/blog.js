import React from "react";
import Head from "../components/Meta";
import About from "../components/About";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
// fs:Nodeの公式モジュール
import fs from "fs";
// front-matter、front-matter以外を取り出すモジュール
import matter from "gray-matter";
import Pagination from "../components/Pagination";

const lists = [
  { name: "top", path: "/" },
  { name: "blog", path: "/blog" },
];

const blog = ({ posts, pages }) => {
  console.log(posts);
  return (
    <>
      <Head pagetitle={"ブログ"} pageDesc={"ブログページです"} />
      <Header fixed={true} />
      <Breadcrumbs lists={lists} />
      <BlogCard posts={posts} />
      <Pagination pages={pages} />
      <Footer />
    </>
  );
};

const PAGE_SIZE = 2;

// ページ数を配列で取得
const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);
// [1, 2, 3];

export const getStaticProps = () => {
  // readFileSync:ファイルの中身を読む
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data, content } = matter(fileContent);
    // fromt-mattter
    // console.log("data:", data);
    // console.log("content:", content);
    return {
      slug,
      frontMatter: data,
    };
  });

  const pages = range(1, Math.ceil(posts.length / PAGE_SIZE));

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts.slice(0, PAGE_SIZE),
      pages,
    },
  };
};

export default blog;
