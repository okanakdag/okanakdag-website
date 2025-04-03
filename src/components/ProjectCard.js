export default function ProjectCard({ title, description, tech, link }) {
    return (
      <div className="border border-white/5 rounded-md p-4 hover:bg-gray-800/50">
        <h3 className="text-m font-semibold text-white">{title}</h3>

        <p className="mt-1">{description}</p>

        <ul className="flex flex-wrap gap-2 text-sm text-gray-300 mt-3">
          {tech.map((item) => (
            <li key={item} className="bg-green-500/10 text-green-50/80 px-2 py-1 rounded font-mono">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  } 