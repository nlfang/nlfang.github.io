import Card from "@/components/Card";

const hobbies = [
    {
      name: "iPod mini",
      imageUrl: "/images/ipodminicard.jpg",
      description: "Storage upgrade and battery replacement of a 1st gen iPod mini",
      tags: [],
      link: "/hobbies/ipod-mini"
    },
    {
      name: "Game Boy Advance",
      imageUrl: "/images/gbacard.png",
      description: "Screen and battery upgrade of a Game Boy Advance",
      tags: [],
      link: "/hobbies/gba"
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
                Hobbies
              </h1>
              <div className="divider mb-8"></div> 
              <div className="grid gap-10 md:grid-cols-2 sm:grid-cols-1">
                {hobbies.map((hobby, index) => (
                  <Card
                    key={index}
                    name={hobby.name}
                    imageUrl={hobby.imageUrl}
                    description={hobby.description}
                    tags={hobby.tags}
                    link={hobby.link}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      );
}
