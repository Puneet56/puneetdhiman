import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  githubUrl: string
  demoUrl?: string
}

export function ProjectCard({ title, description, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <div className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-gray-600 h-12">{description}</p>
      <div className="flex gap-4">
        <Link
          href={githubUrl}
          target="_blank"
          className="text-sm text-blue-600 hover:underline"
        >
          GitHub
        </Link>
        {demoUrl && (
          <Link
            href={demoUrl}
            target="_blank"
            className="text-sm text-blue-600 hover:underline"
          >
            Visit ↗
          </Link>
        )}
      </div>
    </div>
  )
} 