import Image from "next/image";
import ProjectCard from "./components/card";

export default function Page() {
  return (
    <section>
      <a>
        <Image
          src="//avatars.githubusercontent.com/u/206218794?v=4"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">holyata · he/him</h1>
      <div>
        <p>
          I am a Junior Frontend Developer from China, currently working at JD.COM.
        </p>
        <br />
        <p>
          Welcome to my personal website! You can find my blog posts, projects, and other interesting things I come across here.
        </p>
      </div>
      <div className="mt-16 mb-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <ProjectCard
            title="Tailwind CSS Kit"
            description="Design Kit for Utility-First CSS"
            link="#"
          />
          <ProjectCard
            title="Tailwind CSS Plugin"
            description="Style importer for Figma"
            link="#"
          />
          <ProjectCard
            title="Tailwind CSS Radix"
            description="Utilities and variants for styling Radix state"
            link="#"
          />
          <ProjectCard
            title="Flutters"
            description="Flappy Bird + Doodle Jump"
            link="#"
          />
        </div>
      </div>
    </section>
  );
}