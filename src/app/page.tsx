import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { ProjectCard } from '@/components/ProjectCard'

const projects = [
  {
    title: "Backend Toolkit",
    description: "A comprehensive collection of tools and utilities for backend development.",
    githubUrl: "https://github.com/Puneet56/backend-toolkit",
    demoUrl: "https://toolkit.puneetdhiman.com/"
  },
  {
    title: "Atomscript",
    description: "Simple interpreted programming language in go.",
    githubUrl: "https://github.com/Puneet56/atom_script",
    demoUrl: "https://atom-script.vercel.app/"
  },
  {
    title: "Spark",
    description: "Simple static live server using bun with auto reload",
    githubUrl: "https://github.com/Puneet56/spark"
  }
]

export default function Home() {
  return (
    <main className="container mx-auto py-4">
      <div className="ml-auto flex w-max items-center justify-center gap-4 font-mono">

        <Link href="https://github.com/Puneet56" target="_blank">
          <GitHubLogoIcon className="h-8 w-8" />
        </Link>

        <Link href="https://www.linkedin.com/in/puneet-dhiman/" target="_blank">
          <LinkedInLogoIcon className="h-8 w-8" />
        </Link>

        <Link href="mailto:puneetdhiman56@gmail.com">
          <EnvelopeClosedIcon className="h-8 w-8" />
        </Link>
      </div>

      <div className="mt-48 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
          Puneet Dhiman
        </h1>
        <h2 className="mb-6 text-2xl text-gray-600 lg:text-3xl">
          Full Stack Developer & Programming Enthusiast
        </h2>
        <p className="text-lg text-gray-600">
          I build modern web applications and tools that solve real-world problems. 
          Passionate about creating efficient, scalable, and user-friendly solutions.
        </p>
      </div>

      <section className="mt-24">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.githubUrl}
              {...project}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
