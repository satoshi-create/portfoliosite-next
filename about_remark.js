  const checkAST = () => {
    return (tree) => {
      visit(tree, (node) => {
        console.log(node);
      });
    };
  };

  const result = await unified()
    .use(remarkParse)
    .use(checkAST) //mdastにアクセス
    .use(remarkRehype)
    .use(checkAST) //hastにアクセス
    .use(rehypeStringify)
    .process(content);