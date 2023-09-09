import {defineConfig} from 'sanity'
// import {defineConfig} from 'sanity/lib/exports'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'sanity-project',
  title: 'Sanity project',

  projectId: 'c5g75h7y',
  dataset: 'production',

  plugins: [
    deskTool(),
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
