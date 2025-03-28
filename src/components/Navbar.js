export default function NavBar() {
  return (
    <nav className="w-full border-b border-white/10 backdrop-blur-md shadow-md bg-gray-900/40">
      <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Name / Logo */}
        <span className="text-lg font-bold text-white tracking-tight">
          Okan Akdag
        </span>

        {/* Navigation links */}
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="/projects" className="hover:text-white transition-colors">Projects</a>
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
        </div>
      </div>
    </nav>
  );
}