import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto py-4">
      <div className="ml-auto flex w-max items-center justify-center gap-4 font-mono">
        <Link href="#" className="mt-1 text-lg">
          blog
        </Link>

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

      <h1 className="mb-4 mt-48 text-2xl font-bold lg:text-3xl">
        Hey! I am Puneet
      </h1>
      <h2 className="text-4xl">
        Tech enthusiast <br /> Love building things
      </h2>
      {/* <div className="mt-24">
        <h2 className="flex items-end font-mono text-2xl">
          projects <ArrowBottomRightIcon className="h-8 w-8" />
        </h2>
      </div> */}
    </main>
  )
}
