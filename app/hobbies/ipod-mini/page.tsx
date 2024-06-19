import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen px-4 flex justify-center">
      <main className="max-w-3xl w-full mb-20">
        <div className="flex justify-between">
          <div className="breadcrumbs">
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
                <h1 className="font-bold text-2xl">iPod mini</h1>
              </li>
              <p className="font-bold text-sm ml-4 text-accent">August 2023</p>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <p>
            Around the 2010s my aunt and uncle packed up a bunch of my cousin's
            old belongings and sent them to us. These hand-me-downs included a
            bunch of electronic devices that were released before I was born! At
            the time, I was clueless as to how each functioned, and besides some
            of the gaming consoles, mostly sat collecting dust in a bin. Today,
            most of these devices have a thriving modding community seeking to
            revive and improve them, and I've had a lot of fun taking them
            apart, replacing faulty parts, and restoring them to their former
            glory. This iPod mini is another one of my cousin's hand-me-downs.
            Released in 2001, it was the first iPod that Apple released with the
            click wheel, and used a small spinning hard drive.
          </p>
          <figure className="w-full max-w-md mx-auto overflow-hidden rounded-lg mt-6">
            <Image
              src="/images/ipodminicard.jpg"
              alt="iPod mini and Moondrop Kato IEMS"
              layout="responsive"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>

          <p className="mt-6">
            For modifications, I replaced the 4 GB hard drive with an{" "}
            <a
              href="https://www.iflash.xyz/store/sdcf-adapter/"
              className="text-sky-500 hover:underline"
            >
              SD-CF adapter
            </a>{" "}
            and a 64 GB microSD card. The battery no longer held a charge, so I
            also replaced that with a generic 3rd-party one. After reformatting
            the memory and reinstalling the OS with iTunes, the device was
            restored! Below are some more pictures!
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 sm:grid-cols-1">
          <figure className="w-full max-w-md mx-auto overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Image
              src="/images/ipodministorage.jpg"
              alt="iPod mini with the screen showing its 59.4 GB capacity"
              layout="fixed"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>
          <figure className="w-full max-w-md mx-auto overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Image
              src="/images/ipodminiinternals2.jpg"
              alt="iPod mini internals next to its case"
              layout="fixed"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>
          <figure className="col-span-2 w-full max-w-md mx-auto overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Image
              src="/images/ipodminihdd.png"
              alt="iPod mini next to original Seagate 4 GB hard drive"
              layout="fixed"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>
        </div>
      </main>
    </div>
  );
}
