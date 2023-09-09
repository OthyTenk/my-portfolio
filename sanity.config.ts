import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './app/schemas'

export default defineConfig({
  name: 'sanity-project',
  title: 'Sanity project',

  projectId: 'c5g75h7y',
  dataset: 'production',

  plugins: [deskTool()],

  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})
