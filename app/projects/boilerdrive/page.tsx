import { FaGithub } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="min-h-screen px-4 flex justify-center">
      <main className="max-w-3xl w-full">
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
                <h1 className="font-bold md:text-2xl">
                  BoilerDrive
                </h1>
              </li>
            </ul>
            <p className="font-bold text-sm ml-4 md:mt-2 text-accent">
                Jan 2023 - May 2023
            </p>
          </div>
          <a
            className="btn btn-outline btn-secondary items-center ml-3 w-12 h-12"
            href="https://github.com/ZachHeadington/BoilerDrive"
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
              <p>Next.js, TailwindCSS, daisyUI</p>
            </li>
            <li className="flex">
              <div className="badge badge-secondary w-20 mr-2">Backend</div>
              <p>Python FastAPI, Azure Cosmos DB, OpenAI API</p>
            </li>
          </ul>
          <p>
            BoilerDrive offers users a convenient cloud-based file storage
            solution with helpful AI features. Using OpenAI's API, users can
            retrieve contextual summaries of their files' contents, ask about
            specific phrases or concepts within those files, and generate tags
            for classifying and grouping files.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center w-full">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/lrhrKwPTRs8?si=S4AcJEcDzAvMYsVj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col items-center"></div>
      </main>
    </div>
  );
}
