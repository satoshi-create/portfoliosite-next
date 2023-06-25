import { remark } from "remark";
import remarkHtml from "remark-html";
import fs from "fs";

export const markdownToHtml = async (htmlContent) => {
  const result = await remark().use(remarkHtml).process(htmlContent);
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
