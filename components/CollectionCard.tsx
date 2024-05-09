import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { BiSolidArrowToRight } from "react-icons/bi";
import { COLLECTIONCARDSIDE } from "../constants/index";

const CollectionCard = ({
  title1,
  title2,
  image,
  link,
  side,
  roundedImage = false,
}: {
  title1: string;
  title2: string;
  image: string;
  link: string;
  side: string;
  roundedImage?: boolean;
}) => {
  return (
    <div className={clsx("h-[60vh] w-full grid grid-cols-10 relative mb-16")}>
      <Image
        src={image}
        alt="ring"
        layout="fill"
        className={clsx(
          "!w-[50%] z-0",
          roundedImage && "rounded-ss-full rounded-se-full",
          side === COLLECTIONCARDSIDE.RIGHT && "right-0 !left-[unset]"
        )}
      />
      {side === COLLECTIONCARDSIDE.LEFT && <div className="col-span-4"></div>}
      <div
        className={clsx(
          "col-span-6 text-3xl z-10 mt-[25%] ms-5",
          side === COLLECTIONCARDSIDE.RIGHT && "ps-32"
        )}
      >
        <div className="text-left ml-auto">
          <span>{title1}</span>
          <br />
          <span>{title2}</span>
        </div>
        <button className="font-rubik border border-rani text-rani px-5 py-2 rounded-full flex justify-center items-center gap-1 mt-10 text-base hover:text-lightCream hover:bg-rani transition">
          See All
          <BiSolidArrowToRight
            style={{
              height: 20,
              width: 20,
            }}
          />
        </button>
      </div>
      {side === COLLECTIONCARDSIDE.RIGHT && <div className="col-span-4"></div>}
    </div>
  );
};

export default CollectionCard;
