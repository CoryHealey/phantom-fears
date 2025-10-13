import React from "react";
import Hero from "./Hero";

function Content() {
  return (
    <main className="w-full flex flex-col h-screen content-center justify-center mb-25">
      <section>
        <Hero />
      </section>
      <section className="">
        <div className="flex justify-around items-center justify-items-center m-8">
          {/* <Image
            src="/phantom-play.jpg"
            alt="Phantom Fears Icehouse"
            width={400}
            height={400}
            priority
          /> */}
          <p className="w-125 text-center text-lg">
            Phantom Fears is Minnesota’s new Rush Tribute band. Formed after the
            tragic passing of Rush’s drummer and lyricist, Neil Peart, and
            dedicated with deep love to one of the most iconoclastic rock bands
            of all time, Phantom Fears debut performance is not to be missed.
            The Phantom Fears line up is: Chris Bates - bass, Cory Healey -
            drums, Toivo - guitar, Cory Eischen - keyboards, Aby Wolf - vocals.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Content;
