import { defineConfig } from "sanity";
import { schemaTypes } from "./app/schemas";

export default defineConfig({
  name: "sanity-project",
  title: "OkDo Portfolio",

  projectId: "c5g75h7y",
  dataset: "production",

  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },
});
