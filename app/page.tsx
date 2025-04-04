import Image from "next/image";

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
      <h1 className="mb-8 text-2xl font-medium">Who am i?</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS.
        </p>
        <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS.
        </p>
        <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS.
        </p>
        <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
