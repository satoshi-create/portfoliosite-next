---
title: "LaravelのデフォルトのフロントエンドアセットバンドラーはViteに"
date: "2022-07-12"
description: "LaravelのデフォルトのフロントエンドアセットバンドラーはViteに変更したので動作確認をしています。"
image: kamikiri.png
categories: ["laravel"]
---

Laravel のデフォルトのフロントエンドアセットバンドラーが Vite に変更になったので動作確認を行います。

## 目次

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8739039484788204" crossorigin="anonymous"></script><ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-8739039484788204" data-ad-slot="7101648019"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

## Breeze のインストール 1

[Vite](/blog) の動作確認を行うため Laravel プロジェクトの作成後に Breeze パッケージのインストールを行います。

[blog](/)
[Vite](https://ja.vitejs.dev/)



<img src="http://localhost:3000/amazoness_red.png" alt="Next.jsのWelcomeページ" width="897" height="937" />

```js[class="line-numbers"]
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/prism.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```
