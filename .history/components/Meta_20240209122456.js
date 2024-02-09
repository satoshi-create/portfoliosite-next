import React from "react";
import siteMeta from "../libs/constants";
import Head from "next/head";
import { useRouter } from "next/router";
import Router from "next/dist/server/router";



const Meta = ({ pagetitle, pageDesc, pageImg }) => {
  const {
    siteTitle,
    siteDesc,
    siteUrl,
    siteLang,
    siteLocale,
    siteType,
    siteIcon,
  } = siteMeta;

  const title = pagetitle ? `${pagetitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteDesc;

  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;

  const img = "ogp.png";
  const imgUrl = img.startsWith("https") ? img : `${siteUrl}/${img}`;

  const ogpImage = pageImg ? `${siteUrl}/${pageImg}` : imgUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <meta property="og:image" content={ogpImage} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="849" />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
    </Head>
  );
};

export default Meta;
