import { defineField, defineType } from "sanity";
import { text } from "stream/consumers";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "fullname",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "A short description of yourself, what do you do",
      validation: (rule) => rule.required().min(20).max(50),
    }),
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add links to your social media profiles:",
      fields: [
        {
          name: "twitter",
          title: "Twitter",
          type: "url",
          initialValue: "https://twitter.com/",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "github",
          title: "GitHub",
          type: "url",
          initialValue: "https://github.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
  ],
});
