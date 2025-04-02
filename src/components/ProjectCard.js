export default function ProjectCard({ title, description, tech, link }) {
    return (
      <div className="border border-white/10 rounded-md p-4 bg-gray-800 hover:bg-gray-700 transition">
        <h3 className="text-lg font-bold text-white">{title}</h3>
  
        <p className="text-gray-400 mt-1">{description}</p>
  
        <ul className="flex flex-wrap gap-2 text-sm text-gray-300 mt-3">
          {tech.map((item) => (
            <li key={item} className="bg-white/10 px-2 py-1 rounded">
              {item}
            </li>
          ))}
        </ul>
  
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-sky-400 hover:underline"
        >
          View Project →
        </a>
      </div>
    );
  }