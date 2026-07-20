import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'
import { slug } from 'github-slugger'
import { escape } from 'pliny/utils/htmlEscaper.js'
import siteMetadata from '../data/siteMetadata.js'
import tagData from '../app/tag-data.json' with { type: 'json' }
import englishTagData from '../app/en/tag-data.json' with { type: 'json' }
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import { sortPosts } from 'pliny/utils/contentlayer.js'

const outputFolder = process.env.EXPORT ? 'out' : 'public'

const generateRssItem = (config, post) => `
  <item>
    <guid>${config.siteUrl}/${post.path}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/${post.path}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    ${post.tags && post.tags.map((tag) => `<category>${escape(tag)}</category>`).join('')}
  </item>
`

const generateRss = ({ config, posts, page, language, description, blogPath }) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}/${blogPath}</link>
      <description>${escape(description)}</description>
      <language>${language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date(posts[0]?.date || Date.now()).toUTCString()}</lastBuildDate>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post)).join('')}
    </channel>
  </rss>
`

function writeRss({ posts, page, language, description, blogPath }) {
  const rss = generateRss({
    config: siteMetadata,
    posts: sortPosts(posts),
    page,
    language,
    description,
    blogPath,
  })
  const outputPath = path.join(outputFolder, page)
  mkdirSync(path.dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, rss)
}

function writeTagFeeds({ posts, tags, prefix, language, description, blogPath }) {
  for (const tag of Object.keys(tags)) {
    const filteredPosts = posts.filter((post) => post.tags.map((item) => slug(item)).includes(tag))
    writeRss({
      posts: filteredPosts,
      page: `${prefix}tags/${tag}/feed.xml`,
      language,
      description,
      blogPath,
    })
  }
}

const rss = () => {
  const publishedPosts = allBlogs.filter((post) => post.draft !== true)
  const koreanPosts = publishedPosts.filter((post) => post.language !== 'en')
  const englishPosts = publishedPosts.filter((post) => post.language === 'en')
  const englishDescription =
    'A biweekly outlook on AI markets, emerging technology, agent systems, governance, and future scenarios.'

  writeRss({
    posts: koreanPosts,
    page: 'feed.xml',
    language: 'ko-KR',
    description: siteMetadata.description,
    blogPath: 'blog',
  })
  writeRss({
    posts: englishPosts,
    page: 'en/feed.xml',
    language: 'en-US',
    description: englishDescription,
    blogPath: 'en/blog',
  })
  writeTagFeeds({
    posts: koreanPosts,
    tags: tagData,
    prefix: '',
    language: 'ko-KR',
    description: siteMetadata.description,
    blogPath: 'blog',
  })
  writeTagFeeds({
    posts: englishPosts,
    tags: englishTagData,
    prefix: 'en/',
    language: 'en-US',
    description: englishDescription,
    blogPath: 'en/blog',
  })
  console.log('RSS feeds generated...')
}

export default rss
