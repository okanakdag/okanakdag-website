import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";

import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 space-y-20">
        <AboutSection />
        <ProjectsPreview />
        <BlogPreview />
      </main>
      
      <Footer />
    </div>
  );
}

function IconButton({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-gray-800 px-2 py-1 rounded-md shadow-md hover:shadow-lg hover:bg-gray-700"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </a>
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

      <div className="flex flex-wrap gap-6 mt-6">
        <IconButton icon={FaFileAlt} label="View CV" href="/cv.pdf" />
        <IconButton icon={FaGithub} label="GitHub" href="https://github.com/okanakdag" />
        <IconButton icon={FaLinkedin} label="LinkedIn" href="https://linkedin.com/in/okanakdag" />
      </div>

    </section>
  );
}

function ProjectsPreview() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="space-y-3">
        {/* Display the first three project cards */}
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <a href="/projects" className="block mt-4 text-white hover:underline">
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
