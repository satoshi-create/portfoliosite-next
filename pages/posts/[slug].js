import fs from "fs";
import matter from "gray-matter";
import Head from "../../components/Meta";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { marked } from "marked";
import Image from "next/image";

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
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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
  return { props: { frontMatter: data, content, slug: params.slug } };
}

export default Post;
