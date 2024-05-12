import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { BiHeart, BiShoppingBag } from "react-icons/bi";

const NewArrival = () => {
  return (
    <section className="bg-rani w-full p-20">
      <h2 className="text-5xl text-lightCream mb-7">New Arrival</h2>
      <p className="text-lightCream font-rubik text-left">
        Anyone can get dressed up and glamorous, but it is how <br /> people
        dress in their days off that.
      </p>
      <NewArrivalCarousel />
    </section>
  );
};

export default NewArrival;

export function NewArrivalCarousel() {
  return (
    <Carousel className="w-full mt-10">
      <CarouselContent className="-ml-2 md:-ml-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-3 basis-1/2 lg:basis-1/4"
          >
            <div className="pl-2 md:pl-3">
              <Card className="border-none rounded-3xl bg-transparent">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                  <div className="relative h-full w-full">
                    {/* <BiHeart
                      style={{ height: 20, width: 20 }}
                      className="z-10 cursor-pointer"
                    /> */}
                    <Image
                      src={"/assets/new_with_hand.jpg"}
                      alt="New"
                      layout="fill"
                      className="rounded-3xl object-cover z-0"
                    />
                    <Image
                      src={"/assets/new.jpg"}
                      alt="New"
                      layout="fill"
                      className="rounded-3xl object-cover !w-[40%] !h-[40%] !top-[unset] bottom-0 z-10"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex text-lightCream justify-between w-full mt-5">
                    <div className="flex flex-col">
                      <p className="font-rubik">Earring</p>
                      <p className="font-rubik">₹ 499</p>
                    </div>
                    <BiShoppingBag
                      style={{ height: 20, width: 20 }}
                      className="mt-2"
                    />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
