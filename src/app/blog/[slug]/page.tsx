import { getPostData, getSortedPostsData } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

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
