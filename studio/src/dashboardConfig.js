export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "635f1977d1057331c118b248",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-2j9aobck",
                  apiId: "f1948561-1180-4054-9e77-cb53d4803422",
                },
                {
                  buildHookId: "635f19772c15d82d6e024931",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-shez4xdk",
                  apiId: "b028490d-92db-4a5a-91b0-09c722c203ce",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/px-wernerglinka/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-shez4xdk.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
