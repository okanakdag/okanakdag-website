export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="border border-white/5 rounded-md p-4 hover:bg-gray-800/50">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <span className="text-m font-semibold text-white">{title}</span>

        {/* View link if exists */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline break-all"
          >
            {link} →
          </a>
        )}
      </div>


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