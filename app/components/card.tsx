interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
  }
  
  export default function ProjectCard({ title, description, link }: ProjectCardProps) {
    return (
      <div className="border-b-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition">
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <a
          href={link}
          className="text-blue-300 text-sm mt-2 inline-flex items-center"
        >
          View on GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L20 12m0 0l-6.5 7.5M20 12H4"
            />
          </svg>
        </a>
      </div>
    );
  }