import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/BlogCard.module.css";
import Title from "./Title";

const BlogCard = ({ posts }) => {
  return (
    <section className={`parts-grid section-padding`}>
      {/* <Title title={"Blog"} /> */}
      <ul className={styles.blogCards}>
        {posts.map((post) => {
          const { slug, frontMatter } = post;
          const { image, title } = frontMatter;
          return (
            <li key={slug} className={styles.blogCard}>
              <Image
                src={`/${image}`}
                width={1200}
                height={602}
                layout="responsive"
                alt={title}
              />
              <Link href={`posts/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlogCard;
