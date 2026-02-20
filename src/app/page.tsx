import Link from "next/link";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 3); // 只显示最近3篇

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-16">
      {/* Brief Introduction Section */}
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">Neal's Life Gallery</h1>

        <div className="space-y-4">
          {/* 职业头衔 */}
          <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
            Vice President, Intelligent Manufacturing
          </p>
          
          {/* 个人简介 Hook */}
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
            I am passionate about technology, especially in the realms of AI, Deep Learning, and Large Language Models (LLMs). I hold a Master’s degree in Electrical and Computer Engineering (ECE) from Carnegie Mellon University, where I focused on these cutting-edge fields.
            <br className="hidden md:block" />
            Documenting my journey in engineering leadership and personal growth.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-5 pt-2">
          <SocialLink href="yichenz3@alumni.cmu.edu" icon={<Mail size={23} />} label="Email" />
          <SocialLink href="[https://github.com/CardinalNeal](https://github.com/CardinalNeal)" icon={<Github size={23} />} label="GitHub" />
          <SocialLink href="#" icon={<Linkedin size={23} />} label="LinkedIn" />
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