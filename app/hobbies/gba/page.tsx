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
                <h1 className="font-bold text-2xl">Game Boy Advance</h1>
              </li>
              <p className="font-bold text-sm ml-4 text-accent">June 2023</p>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <p>
            Continuing with modifying my cousin's hand-me-downs, here is his old
            Game Boy Advance! Released in 2001, the device originally had a
            front-lit screen, so you could only see things in a well-lit
            environment, and even then it was very dim. Additionally, it uses 2
            double-A batteries for power. Unfortunately, past me was unaware of
            the dangers of leaving batteries in devices, and there was a lot of
            corrosion from the battery that leaked into the shell.
          </p>
          <figure className="w-full max-w-xl mx-auto overflow-hidden rounded-lg mt-6">
            <Image
              src="/images/gbacard.png"
              alt="Game Boy Advance with Pokemon Sapphire"
              layout="responsive"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>

          <p className="mt-6">
            For modifications, I replaced the screen with a{" "}
            <a
              href="https://retrogamerepairshop.com/collections/gba-displays/products/funnyplaying-game-boy-advance-laminated-3-0-ips-kit"
              target="_blank"
              rel="noreferrer"
              className="text-sky-500 hover:underline"
            >
              brighter IPS one
            </a>{" "}
            and also replaced{" "}
            <a
              href="https://retrogamerepairshop.com/collections/gba-shells/products/funnyplaying-game-boy-advance-laminated-ita-ready-shells"
              target="_blank"
              rel="noreferrer"
              className="text-sky-500 hover:underline"
            >
              the shell
            </a>
            . Finally, to remove the need for double-A batteries, I bought a{" "}
            <a
              href="https://retrogamerepairshop.com/collections/gba-power/products/funnyplaying-game-boy-advance-usb-c-rechargeable-battery-mod"
              target="_blank"
              rel="noreferrer"
              className="text-sky-500 hover:underline"
            >
              kit
            </a>{" "}
            with a PCB that supplies power through the original battery contacts
            using a rechargeable lithium-ion battery. The PCB enables charging
            through USB-C.
          </p>
          <p className="mt-2">
            I used the original buttons, button membranes, and speaker, and
            cleaned them and the PCB with isopropyl alcohol. Below are more
            pictures I took during the modding process.
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 sm:grid-cols-1">
          <figure className="w-full max-w-md mx-auto overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Image
              src="/images/gbapcb.png"
              alt="GBA PCB front"
              layout="fixed"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>
          <figure className="w-full max-w-md mx-auto overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Image
              src="/images/gbapcb2.png"
              alt="GBA PCB back"
              layout="fixed"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>
          <figure className="w-full max-w-md mx-auto overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Image
              src="/images/gbadisplay.png"
              alt="FunnyPlaying IPS kit"
              layout="fixed"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>
          <figure className="w-full max-w-md mx-auto overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Image
              src="/images/gbabattery.png"
              alt="FunnyPlaying GBA USB-C Rechargeable Battery mod"
              layout="fixed"
              width={384}
              height={256}
              className="rounded-lg object-contain"
            />
          </figure>
          <figure className="col-span-2 w-full max-w-md mx-auto overflow-hidden rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Image
              src="/images/gbacharging.png"
              alt="GBA with USB-C charging"
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
