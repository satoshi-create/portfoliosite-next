import { remark } from "remark";
import remarkHtml from "remark-html";
import fs from "fs";
import remarkGfm from "remark-gfm";

export const markdownToHtml = async (htmlContent) => {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(htmlContent);
  return result.toString();
};

export const getAllslug = (dirPath) => {
  const files = fs.readdirSync(dirPath).map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  return files;
};
