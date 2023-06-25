import React from "react";
import Head from "../../components/Meta";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import fs from "fs";
import matter from "gray-matter";

const Category = ({ posts, slug }) => {
  const lists = [
    { name: "top", path: "/" },
    { name: "blog", path: "/blog" },
    { name: slug, path: slug },
    // { name: `${slug}`, path: slug },
  ];
  return (
    <>
      <Head pagetitle={"ブログ"} pageDesc={"ブログページです"} />
      <Header fixed={true} />
      <Breadcrumbs lists={lists} />
      <BlogCard posts={posts} />
      <Footer />
    </>
  );
};

export const getStaticProps = ({ params }) => {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data } = matter(fileContent);

    return {
      frontMatter: data,
      slug,
    };
  });

  const category = params.category;
  console.log(category);
  console.log(posts);
  const filteredPosts = posts.filter((post) => {
    return post.frontMatter.categories.includes(category);
  });

  const sortedPosts = filteredPosts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
      slug: category,
    },
  };
};

export const getStaticPaths = () => {
  const categories = ["react", "laravel", "javascript"];
  const paths = categories.map((category) => ({ params: { category } }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export default Category;
