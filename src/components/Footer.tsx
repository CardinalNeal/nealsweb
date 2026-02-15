export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-10 border-t border-gray-100 dark:border-gray-800/50 mt-12 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Neal. All rights reserved.</p>
      <p className="mt-2 md:mt-0">Built with Next.js & AI.</p>
    </footer>
  );
}
