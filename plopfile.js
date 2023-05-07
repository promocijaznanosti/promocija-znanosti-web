module.exports = (plop) => {
  plop.setGenerator("article", {
    description: "Generate a new article",
    prompts: [
      {
        type: "input",
        name: "articleName",
        message: "Article name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/ProjectArticle/articles/{{pascalCase articleName}}/{{pascalCase articleName}}.tsx",
        templateFile: "dev_tools/generator/article_tsx.generator.hbs",
      },
      {
        type: "add",
        path: "src/pages/ProjectArticle/articles/{{pascalCase articleName}}/{{pascalCase articleName}}.scss",
        templateFile: "dev_tools/generator/article_scss.generator.hbs",
      },
      {
        type: "append",
        path: "src/pages/ProjectArticle/articles/articles.tsx",
        pattern: "// PLOP_INSERT_BELOW",
        templateFile: "dev_tools/generator/articles_object.generator.hbs",
      },
      {
        type: "append",
        path: "src/pages/ProjectArticle/articles/articles.tsx",
        pattern: "// PLOP_INSERT_IMPORT_BELOW",
        template:
          'import {{pascalCase articleName}} from "./{{pascalCase articleName}}/{{pascalCase articleName}}";',
      },
      {
        type: "append",
        path: "src/resources/project-info/project-descriptions.tsx",
        pattern: "// PLOP_INSERT_BELOW",
        templateFile: "dev_tools/generator/project_description.generator.hbs",
      },
    ],
  });
};
