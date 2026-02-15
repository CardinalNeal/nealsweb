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
              <div className="text-sm text-gray-500 flex items-center gap-3 mb-2">
                <time>{post.date}</time>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.summary}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
