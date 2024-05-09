import Image from "next/image";
import React from "react";
import CollectionCard from "./CollectionCard";
import { COLLECTIONCARDSIDE } from "../constants/index";

const CollectionSection = () => {
  return (
    <div className="h-screen w-full object-cover px-10 py-20">
      <div className="text-5xl text-rani text-center mb-14">
        <span className="">Discover Jewellery</span>
        <br />
        <span className="">Collection</span>
      </div>
      <div className="grid grid-cols-4 gap-20">
        <div className="col-span-2 bg-orange-400">
          {/* Initial Space */}
          <div className="h-[30vh] w-full"></div>
          <CollectionCard
            title1="Rings for joyful"
            title2="Connection"
            image="/assets/rings.jpg"
            link=""
            side={COLLECTIONCARDSIDE.RIGHT}
          />
        </div>
        <div className="col-span-2 bg-slate-300">
          <CollectionCard
            title1="Inspiration with"
            title2="necklaces"
            image="/assets/necklace.jpg"
            link=""
            side={COLLECTIONCARDSIDE.LEFT}
            roundedImage={true}
          />
          <CollectionCard
            title1="Discover Amazing"
            title2="Earings"
            image="/assets/earring.jpg"
            link=""
            side={COLLECTIONCARDSIDE.RIGHT}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
