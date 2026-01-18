import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "parent",
      type: "reference",
      to: [{ type: "category" }],
      // This ensures we cannot select other "children"
      options: {
        filter: "!defined(parent)",
      },
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
  ],
});
