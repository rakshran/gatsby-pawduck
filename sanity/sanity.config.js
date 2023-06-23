import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ivory-cod',

  projectId: 'tqzx7qlr',
  dataset: 'tech',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
