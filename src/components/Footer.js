export default function Footer() {
    return (
      <footer className="border-t mt-20 py-6 text-center text-sm text-gray-500 shadow-md bg-gray-900/40">
        <div className="flex justify-center gap-4">
          <a href="https://github.com/  okanakdag" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/okanakdag" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
        <p className="mt-2">© {new Date().getFullYear()} Okan Akdağ</p>
      </footer>
    );
  }