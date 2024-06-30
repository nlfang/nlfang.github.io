import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="min-h-screen px-4 flex justify-center">
      <main className="max-w-3xl w-full mb-20">
        <div className="flex justify-between">
          <div className="breadcrumbs flex flex-col sm:flex-row items-start sm:items-center">
            <ul>
              <li>
                <a
                  href="/projects"
                  className="text-sm text-sky-500 hover:underline"
                >
                  Projects
                </a>
              </li>
              <li>
                <h1 className="font-bold md:text-2xl">PurdueCircle</h1>
              </li>
            </ul>
            <p className="font-bold text-sm ml-4 md:mt-2 text-accent">
              Jan 2022 - May 2022
            </p>
          </div>
          <a
            className="btn btn-outline btn-secondary items-center ml-3 w-12 h-12"
            href="https://github.com/ronKovler/purdueCircle"
            target="_blank"
            rel="noreferrer"
            style={{ padding: "4px" }}
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div className="mt-6">
          <ul className="mb-4">
            <li className="flex">
              <div className="badge badge-secondary mr-2 w-20">Frontend</div>
              <p>React Native</p>
            </li>
            <li className="flex">
              <div className="badge badge-secondary w-20 mr-2">Backend</div>
              <p>Spring Boot, AWS, MySQL</p>
            </li>
          </ul>
          <p>
            PurdueCircle is a social media web application that provides users a
            multitude of features, including:
          </p>
          <ul className="list-disc p-4 ml-4">
            <li>Creating text and image posts in topic-specific feeds</li>
            <li>Liking and commenting on posts</li>
            <li>Saving posts</li>
            <li>Messaging other users</li>
            <li>Adding/blocking users</li>
            <li>Viewing each others' profiles</li>
            <li>Editing profile details</li>
            <li>Following topics</li>
            <li>Searching for users and topics</li>
          </ul>
          <p className="mb-10">
            Unfortunately, we did not take a demo video, but we did take a few
            screenshots during development, shown below:
          </p>
        </div>
        <div>
          <h1 className="font-bold md:text-2xl mb-4">Profile Page</h1>
          <figure className="w-full overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
            <Image
              src="/images/purduecirclecard.png"
              alt="iPod mini with the screen showing its 59.4 GB capacity"
              layout="responsive"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>

          <h1 className="font-bold md:text-2xl mb-4 mt-8">Posts with Comments</h1>
          <figure className="w-full overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
            <Image
              src="/images/purduecirclepost.png"
              alt="iPod mini with the screen showing its 59.4 GB capacity"
              layout="responsive"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>
        </div>

        <div className="flex flex-col items-center"></div>
      </main>
    </div>
  );
}
