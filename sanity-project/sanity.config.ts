import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import {schemaTypes} from '../app/schemas'

export default defineConfig({
  name: 'sanity-project',
  title: 'Sanity project',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'asdaf',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
      defaultDataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    }),
  ],

  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})
