export default function Navbar() {
    return (
      <nav className="w-full border-b px-4 py-3">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <span className="font-semibold text-lg">Okan Akdağ</span>
          <div className="flex gap-4 text-sm">
            <a href="/projects" className="hover:underline">Projects</a>
            <a href="/blog" className="hover:underline">Blog</a>
          </div>
        </div>
      </nav>
    );
  }