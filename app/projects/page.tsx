import Card from "@/components/Card";

const projects = [
  {
    name: "BoilerDrive",
    imageUrl: "/images/boilerdrivethumbnail.png",
    description: "Cloud-based file storage web app with AI features",
    tags: ["Web Dev", "OpenAI API"],
    link: "/projects/boilerdrive"
  },
  {
    name: "Placeholder",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    description: "Placeholder desc",
    tags: [],
    link: "/"
  },
  {
    name: "Placeholder",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    description: "Placeholder desc",
    tags: [],
    link: "/"
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
