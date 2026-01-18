import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./app/schemas";

export default defineConfig({
  name: "sanity-project",
  title: "OkDo Portfolio",

  projectId: "c5g75h7y",
  dataset: "production",

  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
