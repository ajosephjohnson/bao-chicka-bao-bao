import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemaTypes';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['brand']);

export default defineConfig({
  name: 'default',
  title: 'bao',

  projectId: 'szp5t64d',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton item
            S.listItem()
              .title('Brand Settings')
              .id('brand')
              .child(
                S.document()
                  .schemaType('brand')
                  .documentId('brand')
              ),
            // Regular document list items
            S.documentTypeListItem('menuItem')
              .title('Menu Items')
          ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global "New document" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
