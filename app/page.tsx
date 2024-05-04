"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Home() {
  const [Splash, setSplash] = useState(true);
  const logoRef = useRef(null);
  const earring1Ref = useRef(null);
  const earring2Ref = useRef(null);

  useEffect(() => {
    if (Splash) {
      const elements = [
        logoRef.current,
        earring1Ref.current,
        earring2Ref.current,
      ];
      anime({
        targets: elements,
        opacity: [0, 1],
        easing: "easeInOutQuad",
        complete: () => {
          anime({
            targets: "#splash-main",
            opacity: [1, 0],
            easing: "easeInOutQuad",
            duration: 2000,
            complete: () => {
              setSplash(false);
            },
          });

          const logo: any = logoRef.current!;
          const logoRect = logo.getBoundingClientRect();
          anime({
            targets: logoRef.current,
            translateY: `-${logoRect.top + 220}px`,
            translateX: `-${logoRect.left + 220}px`,
            scale: "0.2",
            easing: "easeInOutQuad",
          });

          // Get the current position of the earring
          const earring: any = earring1Ref.current!;
          const earringRect = earring.getBoundingClientRect();
          console.log(earringRect, window.screen);
          anime({
            targets: [earring1Ref.current, earring2Ref.current],
            translateY: `-${earringRect.top - 100}px`,
            translateX: `${earringRect.right - 100}px`,
            easing: "easeInOutQuad",
            // duration: 5000,
          });
        },
      });
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      {/* Splash Screen */}
      <div className="absolute top-0 left-0 z-50 bg-white" id="splash-main">
        <div
          className="h-screen w-screen flex justify-center items-center relative"
          style={{
            display: Splash ? "flex" : "none",
          }}
        >
          <Image
            id="logo"
            ref={logoRef}
            src={"/assets/logo.svg"}
            alt="Logo"
            height={540}
            width={540}
            className="opacity-0"
          />
          <Image
            id="Earring1"
            ref={earring1Ref}
            src={"/assets/earring.svg"}
            alt="Logo"
            height={70}
            width={41}
            style={{
              position: "absolute",
              top: "calc(50vh - 107px)",
              left: "calc(50vw - 90.5px)",
              opacity: 0,
            }}
          />
          <Image
            id="Earring2"
            ref={earring2Ref}
            src={"/assets/earring.svg"}
            alt="Logo"
            height={70}
            width={41}
            style={{
              position: "absolute",
              top: "calc(50vh - 85.5px)",
              left: "calc(50vw + 57.5px)",
              opacity: 0,
            }}
          />
        </div>
      </div>

      <>
        <div className="bg-white w-full h-[150vh]">
          <div className="relative isolate px-6 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next round of funding.{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Data to enrich your online business
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
