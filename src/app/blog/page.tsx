import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">Writing</h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Thoughts on software engineering, design systems, and digital minimalism.
        </p>
      </header>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
                <div className="text-sm text-gray-500 flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                    {post.category && (
                    <>
                        <span className="font-medium text-blue-600 dark:text-blue-400">{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                    </>
                    )}
                    <time>{post.date}</time>
                </div>
                <h3 className="text-xl font-medium mb-3 group-hover:underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4">
                    {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {post.summary}
                </p>

                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map(tag => (
                        <span 
                            key={tag} 
                            className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700/50"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
