import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publishDate: fields.date({ label: 'Publish Date' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { 
          label: 'Tags', 
          itemLabel: props => props.value 
        }),
        content: fields.mdx({ 
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/articles',
              publicPath: '/images/articles/',
            },
            table: true,
            codeBlock: true,
            divider: true,
            blockquote: true,
            link: true,
            heading: [2, 3, 4, 5, 6],
            bold: true,
            italic: true,
            strikethrough: true,
            code: true,
            orderedList: true,
            unorderedList: true,
          },
        }),
      },
    }),
    guides: collection({
      label: 'Guides & Workflows',
      slugField: 'title',
      path: 'src/content/guides/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Short Summary' }),
        content: fields.mdx({
          label: 'Content',
          options: { 
            image: { 
              directory: 'public/images/guides', 
              publicPath: '/images/guides/' 
            },
            table: true,
            codeBlock: true,
            divider: true,
            blockquote: true,
            link: true,
            heading: [2, 3, 4, 5, 6],
            bold: true,
            italic: true,
            strikethrough: true,
            code: true,
            orderedList: true,
            unorderedList: true,
          }
        }),
      },
    }),
    library: collection({
      label: 'Library & Resources',
      slugField: 'title',
      path: 'src/content/library/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        author: fields.text({ label: 'Author / Creator' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Book', value: 'book' },
            { label: 'Video', value: 'video' },
            { label: 'Article', value: 'article' }
          ],
          defaultValue: 'book'
        }),
        coverImage: fields.image({
          label: 'Cover Image / Thumbnail',
          directory: 'public/images/library',
          publicPath: '/images/library/'
        }),
        content: fields.mdx({ 
          label: 'Why I Recommend It',
          options: {
            table: true,
            codeBlock: true,
            divider: true,
            blockquote: true,
            link: true,
            heading: [2, 3, 4, 5, 6],
            bold: true,
            italic: true,
            strikethrough: true,
            code: true,
            orderedList: true,
            unorderedList: true,
          }
        }),
      },
    }),
  },
});