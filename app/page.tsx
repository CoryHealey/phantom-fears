import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main
        className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start content-center justify-center"
      >
        {/* <main className="w-full flex flex-col h-screen content-center justify-center"> */}
        {/* <div className="flex justify-around justify-items-center"> */}
          <div className="flex flex-col gap-[32px] items-center justify-center justify-items-center">
          <div className="flex flex-col gap-[32px] items-center justify-center justify-items-center">
            <p className="text-red-600/100 text-5xl font-bold">
              Phantom Fears
            </p>
         
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-center content-center">
            <Image
              src="/PhantomFearsArtIceHouse202511x17B.jpg"
              alt="Phantom Fears Icehouse"
              width={500}
              height={500}
              priority
            />
              <p className="w-96 text-justify">
                Phantom Fears is Minnesota’s new Rush Tribute band. Formed after the tragic passing of Rush’s drummer and lyricist, Neil Peart, and dedicated with deep love to one of the most iconoclastic rock bands of all time, Phantom Fears debut performance is not to be missed. The Phantom Fears line up is: Chris Bates - bass, Cory Healey - drums, Toivo - guitar, Cory Eischen - keyboards, Aby Wolf - vocals.
              </p>       
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
