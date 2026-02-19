"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Publications", path: "/publications" },
  { name: "Tools", path: "/tools" },
  { name: "Resume", path: "/resume" },
];

export default function Navbar() {
  const {theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 避免服务端渲染的水合不匹配
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    // 如果当前是 dark，就切 light；反之亦然
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#1d1e20]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/50">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold tracking-tight text-lg hover:opacity-70 transition-opacity">
          Neal.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`hover:text-[#1a1a1a] dark:hover:text-[#e5e5e5] transition-colors ${
                pathname === item.path ? "text-[#1a1a1a] dark:text-[#e5e5e5] underline underline-offset-4 decoration-gray-300" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 ml-2 mr-2"></div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-1.5">
            {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-1.5">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1d1e20] px-6 py-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-sm font-medium py-2 text-gray-600 dark:text-gray-400 hover:text-[#1a1a1a]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}