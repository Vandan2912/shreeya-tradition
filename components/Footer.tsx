"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
    const pathname = usePathname();
    if (pathname === "/auth") {
      return <></>;
    }
  return (
    <div className="w-full bg-lightpink">
      <div className="pt-16 pb-24 grid grid-cols-4 max-w-[1300px] mx-auto text-start">
        <Image
          src={"/assets/logo.svg"}
          alt="logo"
          height={100}
          width={100}
          className="object-contain"
        />
        <div className="flex flex-col gap-1 font-robotoCondensed">
          <h6 className="font-normal mb-4 text-[1.4em]">About us</h6>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              Home
            </p>
          </Link>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              About
            </p>
          </Link>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              Contact
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-1 font-robotoCondensed">
          <h6 className="font-normal mb-4 text-[1.4em]">Shop</h6>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              Rings
            </p>
          </Link>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              Bracelets
            </p>
          </Link>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              Earrings
            </p>
          </Link>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              Necklaces
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-1 font-robotoCondensed">
          <h6 className="font-normal mb-4 text-[1.4em]">Address</h6>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              123 Fifth Avenue, New York,
            </p>
          </Link>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              NY 10160
            </p>
          </Link>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              contact@info.com
            </p>
          </Link>
          <Link href="#" className="w-fit">
            <p className="cursor-pointer text-small text-[rgba(0,0,0,0.5)] w-fit">
              929-242-6868
            </p>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div className="h-px w-full bg-rani opacity-15"></div>
        <Link href="#">
          <p className="max-w-[1300px] mx-auto text-center font-robotoCondensed text-[rgba(0,0,0,0.5)] py-8">
            Copyright © 2024 Shreeya Traditions | Powered by Shreeya Traditions
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
