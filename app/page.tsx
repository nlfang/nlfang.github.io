import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen px-4 flex justify-center">
      <main className="mt-16 max-w-3xl w-full">
        <div className="mb-10 mockup-window border bg-base-300 border-base-300">
          <div className="flex justify-center px-4 py-16 border-t border-base-300 bg-base-200">
            <div className="mt-6">
              <h1 className="font-bold text-4xl">Nicholas Fang</h1>
              <a
                href="mailto: nicholas.fang02@gmail.com"
                className="text-sky-500 hover:underline"
              >
                nicholas.fang02@gmail.com
              </a>
              <div className="flex mt-3">
                <a
                  className="btn btn-secondary"
                  href="resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Resume / CV</p>
                </a>
                <a
                  className="btn btn-outline btn-secondary flex items-center ml-3 w-12 h-12"
                  href="https://github.com/nlfang"
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: "4px" }}
                >
                  <FaGithub size={30} />
                </a>
                <a
                  className="btn btn-outline btn-secondary flex items-center ml-3 w-12 h-12"
                  href="https://linkedin.com/in/nlfang"
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: "4px" }}
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
            <div className="avatar ml-20 mt-8">
              <div className="w-28 h-28 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                <img src="/images/me.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2>👋 Welcome to my website!</h2>
          <p>
            I'm a recent university graduate from Purdue University, where I
            earned my B.S. in CS and a minor in Econ. My interests include
            full-stack engineering, AI, computer networks, industrial
            organization, and game theory, to name a few. Currently, I'm
            pursuing a role in Software Engineering.
          </p>
        </div>
        <div className="mt-14">
          <h2>💼 Work Experience</h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">May 2023 - May 2024</time>
                <div className="text-lg font-black text-secondary">KeyByte</div>
                Refined a Python-based genetic algorithm framework to decrease
                algorithm runtime by 20% and implemented comprehensive test
                suites using Pytest to ensure its reliability and performance.
                Executed performance benchmarking of Redis and Aerospike
                databases on AWS EC2 instances using Docker and YCSB to compare
                their metrics and capabilities.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">May 2022 - August 2022</time>
                <div className="text-lg font-black text-secondary">Intel</div>
                Owned the development of a new observability service created
                with Bokeh and Python to interactively visualize the memory
                performance of chips under various stressing conditions. Created
                a CLI tool using Python to improve the user experience of
                writing complex queries.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">June 2021 - July 2021</time>
                <div className="text-lg font-black text-secondary">
                  Breezing
                </div>
                Optimized the company’s WordPress site for SEO and user
                experience, resulting in improved rankings on Google’s front
                page for two additional keywords and achieving a Google
                Pagespeed Insights score that is 25-35% higher than competitors’
                scores.
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
