import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'sanity-project',
  title: 'Sanity project',

  projectId: 'c5g75h7y',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),
  ],

  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})
