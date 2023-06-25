import fs from "fs";
import matter from "gray-matter";
import Pagination from "../../components/Pagination";
import BlogCard from "../../components/BlogCard";
import Head from "../../components/Meta";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const lists = [
  { name: "top", path: "/" },
  { name: "blog", path: "/blog" },
];

const Page = ({ posts, pages, current_page }) => {
  return (
    <>
      <Head pagetitle={"ブログ"} pageDesc={"ブログページです"} />
      <Header fixed={true} />
      <Breadcrumbs lists={lists} />
      <BlogCard posts={posts} />
      <Pagination pages={pages} current_page={current_page} />
      <Footer />
    </>
    // <div className="my-8">
    //   <div className="grid grid-cols-3 gap-4">
    //     <BlogCard posts={posts} />
    //   </div>
    //   <Pagination pages={pages} current_page={current_page} />
    // </div>
  );
};

// 1ページに表示する記事数
const PAGE_SIZE = 2;

// ページ数を配列で取得
const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);
// [1, 2, 3];

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const count = files.length;

  // ページ数の配列を展開しpathを取得
  const paths = range(1, Math.ceil(count / PAGE_SIZE)).map((i) => ({
    params: { page: i.toString() },
  }));
  // [
  //   { params: { page: "1" } },
  //   { params: { page: "2" } },
  //   { params: { page: "3" } },
  // ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const current_page = params.page;
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

  const pages = range(1, Math.ceil(posts.length / PAGE_SIZE));

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  const slicedPosts = sortedPosts.slice(
    PAGE_SIZE * (current_page - 1),
    PAGE_SIZE * current_page
  );

  return {
    props: {
      posts: slicedPosts,
      pages,
      current_page,
    },
  };
}

export default Page;
