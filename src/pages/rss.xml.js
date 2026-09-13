import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // 1. Fetch all your articles
  const articles = await getCollection('articles');
  
  // 2. Generate the XML feed
  return rss({
    title: 'Darko Tushev | Field Notes',
    description: 'Executive advisory in Enterprise AI and Agentic Commerce.',
    site: 'https://darkotushev.com',
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.publishDate,
      description: article.data.description,
      // We use the ID to link directly to the article
      link: `/articles/${article.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}