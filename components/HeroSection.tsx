import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  BiArrowFromLeft,
  BiArrowToRight,
  BiSolidArrowToRight,
} from "react-icons/bi";

const HeroSection = () => {
  return (
    <section className="w-full" style={{ height: "calc(100vh - 5.75rem)" }}>
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-4 p-20 text-right">
          <p className="text-7xl">Traditions Meets</p>
          <p className="text-7xl mr-5">New Style</p>
          <p className="mt-10 ms-28 font-rubik text-left">
            Anyone can get dressed up and glamorous, but it is how <br /> people
            dress in their days off that.
          </p>
          <button className="font-rubik bg-rani text-lightCream px-5 py-3 rounded-full flex justify-center items-center gap-3 ms-28 mt-10">
            See All{" "}
            <BiSolidArrowToRight
              style={{
                height: 20,
                width: 20,
              }}
            />
          </button>
        </div>
        <div className="col-span-2">07</div>
        <div className="col-span-1">07</div>
      </div>
    </section>
  );
};

export default HeroSection;
