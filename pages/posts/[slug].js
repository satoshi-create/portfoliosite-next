import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

import { markdownToHtml, getAllslug } from "../../libs/markdown";

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
  const paths = getAllslug("posts");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);

  const result = await markdownToHtml(content);

  console.log(result);

  return {
    props: {
      frontMatter: data,
      content: result,
      // slug: params.slug,
      // toc: toc.toString(),
    },
  };
}

export default Post;
