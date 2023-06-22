import fs from "fs";
import matter from "gray-matter";
import Head from "../../components/Meta";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { marked } from "marked";
import Image from "next/image";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";

import remarkToc from "remark-toc";

import { visit } from "unist-util-visit";
import remarkPrism from "remark-prism";

import { createElement, Fragment } from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

import Link from "next/link";

// const MyLink = ({ children, href }) => {
//   return (
//     <Link href={href}>
//       <a>{children}</a>
//     </Link>
//   );
// };

function MyLink({ children, href }) {
  if (href === "") href = "/";
  return href.startsWith("/") || href.startsWith("#") ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

// const MyImage = ({ src, alt }) => {
//   return <Image src={src} alt={alt} width="1200" height="700" />;
// };

const MyImage = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit="contain"
    />
  );
};

const toReactNode = (content) => {
  return unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        a: MyLink,
        img: MyImage,
      },
    })
    .processSync(content).result;
};

const Post = ({ frontMatter, content, slug }) => {
  const lists = [
    { name: "top", path: "/" },
    { name: "blog", path: "/blog" },
    { name: slug, path: slug },
    // { name: `${slug}`, path: slug },
  ];

  return (
    <>
      <Head
        pagetitle={frontMatter.title}
        pageDesc={frontMatter.description}
        pageImg={frontMatter.image}
      />
      <Header fixed={true} />
      <Breadcrumbs lists={lists} />
      <article className="prose prose-lg max-w-none parts-grid section-padding">
        <div className="border">
          <Image
            src={`/${frontMatter.image}`}
            width={1200}
            height={700}
            alt={frontMatter.title}
          />
        </div>
        <h1 className="mt-12">{frontMatter.title}</h1>
        <span>{frontMatter.date}</span>
        {toReactNode(content)}
        {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
        {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
      </article>
      <Footer />
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
  // console.log(file);
  const { data, content } = matter(file);

  // const checkAST = () => {
  //   return (tree) => {
  //     visit(tree, (node) => {
  //       console.log(node);
  //     });
  //   };
  // };

  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: ["line-numbers"],
    })
    .use(remarkToc, {
      heading: "目次",
    })
    // .use(checkAST) //mdastにアクセス
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    // .use(checkAST) //hastにアクセス
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  //  const result = await unified()
  //    .use(remarkParse)
  //    .use(remarkRehype)
  //    .use(rehypeStringify)
  //    .process(content);
  //  console.log("result:", result.toString());

  return {
    props: { frontMatter: data, content: result.toString(), slug: params.slug },
  };
}

export default Post;
