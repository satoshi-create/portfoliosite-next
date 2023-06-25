import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import { remark } from "remark";
import remarkHtml from "remark-html";

const Post = ({ frontMatter, content }) => {
  console.log(frontMatter);
  console.log(content);
  return (
    <>
      <h1 className="mt-12">{frontMatter.title}</h1>
      <span>{frontMatter.date}</span>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  // console.log("paths:", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);

  const result = await remark().use(remarkHtml).process(content);

  console.log(result);

  return {
    props: {
      frontMatter: data,
      content: result.toString(),
      // slug: params.slug,
      // toc: toc.toString(),
    },
  };
}

export default Post;
