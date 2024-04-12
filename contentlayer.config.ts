import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

import { DEFAULT_LOCALE, LOCALES } from './src/configs/i18nConfigs';
import { defineDocumentType, makeSource } from './src/lib/contentLayerAdapter';
import imageMetadata from './src/plugins/imageMetadata';
export const Post = defineDocumentType(() => ({
  name: 'Post',
  // 更新 filePathPattern，從 *.md 改成 *.mdx，
  filePathPattern: `content/posts/**/*.mdx`,
  // 並新增下面這行 contentType
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },// 新增 socialImage
    socialImage: {
      type: 'string',
    },
    // 新增 redirectFrom
    redirectFrom: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (post) => `/posts/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug, // For generating slugs for headings
      rehypeCodeTitles, // For adding titles to code blocks
      [rehypePrism, { ignoreMissing: true }], // For code syntax highlighting
      imageMetadata, // For adding image metadata (width, height)
    ],
  },
});
