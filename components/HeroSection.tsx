import Image from "next/image";
import React from "react";
import {
  BiSolidArrowToRight,
} from "react-icons/bi";

const HeroSection = () => {
  return (
    <section
      className="w-full px-10 relative"
      style={{ height: "calc(100vh - 5.75rem)" }}
    >
      <div className="bg-lightGreen absolute right-0 top-[-5.75rem] h-screen w-1/3"></div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7 py-20 px-14 text-right">
          <p className="text-[5rem]">Tradition Meets</p>
          <p className="text-[5rem] mr-5">New Style</p>
          <p className="mt-10 ms-20 font-rubik text-left">
            Anyone can get dressed up and glamorous, but it is how <br /> people
            dress in their days off that.
          </p>
          <button className="font-rubik bg-rani text-lightCream px-5 py-3 rounded-full flex justify-center items-center gap-3 ms-20 mt-10 hover:scale-110 transition">
            See All
            <BiSolidArrowToRight
              style={{
                height: 20,
                width: 20,
              }}
            />
          </button>
        </div>
        <div className="col-span-3 flex items-center">
          <div className="object-contain w-full h-3/4 relative">
            <Image src={"/assets/earrings.jpg"} alt="1" layout="fill" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="object-contain w-full h-full relative ">
            <Image
              src={"/assets/IMG_7059.jpg"}
              alt="2"
              layout="fill"
              className="rounded-ss-full rounded-se-full !h-fit !top-[50%] translate-y-[-50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
