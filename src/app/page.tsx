import Link from "next/link";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/posts"; // 记得确保 lib/posts.ts 存在

export default function Home() {
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 3); // 只显示最近3篇

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">Neal.</h1>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl">
          I am a Senior Frontend Engineer and UI/UX Designer specializing in building high-performance, accessible, and minimalist web architectures.
        </p>
        
        {/* Social Links */}
        <div className="flex flex-wrap gap-5 pt-2">
          <SocialLink href="mailto:your@email.com" icon={<Mail size={20} />} label="Email" />
          <SocialLink href="[https://github.com/CardinalNeal](https://github.com/CardinalNeal)" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
        </div>
      </section>

      <hr className="border-gray-100 dark:border-gray-800/60" />

      {/* Recent Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold tracking-tight">Recent Posts</h2>
          <Link href="/blog" className="text-sm flex items-center gap-1 text-gray-500 hover:text-black dark:hover:text-white transition-colors group">
            View all <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="space-y-10">
          {recentPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                  <h3 className="text-lg font-medium group-hover:underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4">
                    {post.title}
                  </h3>
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-3 mb-3">
                  <time>{post.date}</time>
                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                  <span>{post.summary}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-[#1a1a1a] dark:hover:text-[#e5e5e5] transition-colors p-2 -m-2"
    >
      {icon}
    </a>
  );
}