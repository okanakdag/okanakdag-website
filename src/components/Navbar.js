export default function NavBar() {
  return (
    <nav className="w-full border-b border-white/10 backdrop-blur-md shadow-md bg-gray-900/40">
      <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Name / Logo */}
        <a href="/" className="text-lg font-bold text-white tracking-tight">
        Okan Akdag
        </a>
        {/* Navigation links */}
        <div className="flex gap-6 text-sm text-gray-400">
          <NavItem href="/" text="Home" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/blog" text="Blog" />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, text }) {
  return (
    <a
      href={href}
      className="relative group text-gray-400 hover:text-white transition-colors duration-200"
    >
      {text}
      <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
    </a>
  );
}