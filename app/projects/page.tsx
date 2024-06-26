import Card from "@/components/Card";

const projects = [
  {
    name: "BoilerDrive",
    imageUrl: "/images/boilerdrivecard.png",
    description: "Cloud-based file storage web app with AI features",
    tags: ["Web Dev", "Fullstack", "OpenAI API"],
    link: "/projects/boilerdrive"
  },
  {
    name: "EatsCalendar",
    imageUrl: "/images/eatscalendarcard.png",
    description: "iOS app helping users in selecting and preparing food recipes",
    tags: ["iOS", "Swift"],
    link: "/projects/eatscalendar"
  },
  {
    name: "PurdueCircle",
    imageUrl: "/images/purduecirclecard.png",
    description: "Purdue-themed social media web app",
    tags: ["Web Dev", "Fullstack"],
    link: "/projects/purduecircle"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen px-4 flex justify-center">
      <main className="mt-16 max-w-3xl w-full mb-20">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mb-2">
            Projects
          </h1>
          <div className="divider mb-8"></div> 
          <div className="grid gap-10 md:grid-cols-2 sm:grid-cols-1">
            {projects.map((project, index) => (
              <Card
                key={index}
                name={project.name}
                imageUrl={project.imageUrl}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
