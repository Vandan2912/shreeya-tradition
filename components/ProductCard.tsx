"use client";
import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Tooltip as ReactTooltip } from "react-tooltip";

type ProctCardProps = {
  image: string;
  name: string;
  price: number;
  discountedPrice?: number;
  sale?: boolean;
};
const ProductCard = ({
  image,
  name,
  price,
  discountedPrice = 0,
  sale = false,
}: ProctCardProps) => {
  return (
    <>
      <div className="row-span-1 min-h-[470px] text-start">
        <div className="relative h-[80%] w-full overflow-hidden group">
          <Image
            src={image}
            alt="product-image"
            layout="fill"
            className="group-hover:scale-150 transition-all z-0"
          />
          <div
            data-tooltip-id="add-cart"
            className="bg-white rounded-full absolute right-4 top-4 z-10 p-[6px] justify-center items-center cursor-pointer hidden group-hover:flex"
            style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.15)" }}
          >
            <BiShoppingBag className="h-4 w-4" />
          </div>

          <div
            data-tooltip-id="quick-view"
            className="bg-white rounded-full absolute right-4 top-14 z-10 p-[6px] justify-center items-center cursor-pointer hidden group-hover:flex"
            style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.15)" }}
          >
            <Eye className="h-4 w-4" />
          </div>

          {sale && (
            <div
              data-tooltip-id="quick-view"
              className="bg-white rounded-full absolute left-4 top-4 z-10 py-[0.2em] px-[0.8em] justify-center items-center cursor-pointer flex"
              style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="text-[.87em]">Sale</div>
            </div>
          )}
        </div>
        <div className="h-[20%] w-full flex flex-col justify-center ml-4">
          <h2 className="font-cinzel text-productName">{name}</h2>
          <span className="text-base">
            {sale ? (
              <>
                <del className="text-[rgba(0,0,0,0.4)] mr-2">
                  <span>₹</span>
                  {price.toFixed(2)}
                </del>
                <span className="font-bold text-[rgba(0,0,0,0.7)]">
                  <span>₹</span>
                  {discountedPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-normal text-[rgba(0,0,0,0.7)]">
                <span>₹</span>
                {price.toFixed(2)}
              </span>
            )}
          </span>
        </div>
      </div>
      <ReactTooltip id="add-cart" place="left" content="Add to cart" />
      <ReactTooltip id="quick-view" place="left" content="Quick view" />
    </>
  );
};

export default ProductCard;
