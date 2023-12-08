import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      type: 'string',
      title: 'Small Overview',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'link',
      type: 'string',
      title: 'Link',
    }),
    defineField({
      name: 'categories',
      title: 'Project Categories',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'category',
          title: 'Project Category',
          type: 'reference',
          // to: [{type: categoryType.name}],
          to: [{type: 'category'}],
        }),
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toDateString(),
    }),
  ],
})
