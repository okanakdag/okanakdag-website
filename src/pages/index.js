import Footer from "../components/Footer";
import Navar from "../components/Navbar";


export default function Home() {
  return (
    <>
      <Navar />
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-20">
        <AboutSection />
        <ProjectsPreview />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}

function AboutSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p>
        I’m a computer engineering student passionate about building clean, performant web applications.
        I enjoy working with modern technologies like JavaScript, React, Next.js, and C#.
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-medium">Skills</h3>
        <ul className="flex flex-wrap gap-2 mt-2 text-sm">
          <li className="bg-gray-100 px-2 py-1 rounded">JavaScript</li>
          <li className="bg-gray-100 px-2 py-1 rounded">C#</li>
          <li className="bg-gray-100 px-2 py-1 rounded">React</li>
          <li className="bg-gray-100 px-2 py-1 rounded">Next.js</li>
          <li className="bg-gray-100 px-2 py-1 rounded">SQL</li>
        </ul>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h3 className="text-lg font-bold">Social Diet Platform</h3>
          <p>
            A social platform for tracking meals and nutrition. Built as a thesis project using C# and SQL.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="text-lg font-bold">Personal Portfolio</h3>
          <p>
            This site. Built with Next.js and Tailwind CSS to showcase projects and blog posts.
          </p>
        </div>
      </div>
      <a href="/projects" className="block mt-4 text-blue-600 hover:underline">
        View all projects →
      </a>
    </section>
  );
}

function BlogPreview() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
      <ul className="space-y-2">
        <li>
          <a href="/blog/first-post" className="hover:underline">
            Getting Started with Next.js
          </a>
          <span className="block text-sm text-gray-500">March 2025</span>
        </li>
        <li>
          <a href="/blog/second-post" className="hover:underline">
            Markdown vs Notion for Blogging
          </a>
          <span className="block text-sm text-gray-500">March 2025</span>
        </li>
      </ul>
      <a href="/blog" className="block mt-4 text-blue-100 hover:underline">
        View all posts →
      </a>
    </section>
  );
}
