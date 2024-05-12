import Image from "next/image";
import React from "react";
import { BiSolidArrowToRight } from "react-icons/bi";

const AboutSection = () => {
  return (
    <section className="w-full min-h-[85vh] grid grid-cols-2 gap-10 bg-lightCream">
      <div className="relative m-20 ms-36">
        <Image
          src={"/assets/new_with_hand.jpg"}
          alt="New"
          layout="fill"
          className="rounded-3xl object-cover z-0 !w-[75%] rounded-ss-full rounded-se-full"
        />
        <Image
          src={"/assets/new.jpg"}
          alt="New"
          layout="fill"
          className="rounded-full object-cover !w-[unset] !h-[50%] !top-[unset] bottom-0 !left-[unset] right-0 z-10 aspect-square border-[6px] border-white"
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h1 className="text-6xl text-rani">Tradtion Cared</h1>
        <h1 className="text-6xl text-rani mt-2">For Since 1970</h1>
        <p className="mt-5 font-rubik w-2/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          iure maxime mollitia deserunt sunt sed
        </p>
        <button className="font-rubik bg-rani text-lightCream px-6 py-3 w-fit rounded-full flex justify-center items-center gap-3 mt-10 hover:scale-110 transition">
          See All
          <BiSolidArrowToRight
            style={{
              height: 20,
              width: 20,
            }}
          />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
