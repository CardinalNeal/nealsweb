import { getPostData, getSortedPostsData } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from "next/link"; // 1. 修复：添加这行缺失的引用

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. 修复：Next.js 15/16 中 params 是一个 Promise，需要修改类型定义
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // 3. 修复：等待 params 解析
  const { slug } = await params;
  const post = getPostData(slug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/blog" className="text-sm text-gray-500 hover:text-black dark:hover:text-white mb-8 block">
        ← Back to all posts
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="mb-10 not-prose">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{post.title}</h1>
          <time className="text-gray-500 text-sm">{post.date}</time>
        </header>
        
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}