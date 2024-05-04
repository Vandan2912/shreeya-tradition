"use client";

import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import anime from "animejs";
import clsx from "clsx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    anime({
      targets: "#header",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2000,
    });

    const handleScroll = () => {
      const stickyDiv: any = stickyRef.current;
      if (stickyDiv) {
        const stickyPosition = stickyDiv.getBoundingClientRect().top;
        setIsSticky(stickyPosition <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("isSticky", isSticky);

  useEffect(() => {
    if (isSticky) {
      anime({
        targets: "#logo",
        top: ["-16px", "8px"],
        easing: "easeInOutQuad",
        duration: 100,
      });

      anime({
        targets: stickyRef.current,
        padding: ["8px", "24px"],
        easing: "easeInOutQuad",
        duration: 100,
      });
    } else {
      anime({
        targets: "#logo",
        translateY: ["8px","0px"],
        easing: "easeInOutQuad",
        duration: 100,
      });
      anime({
        targets: stickyRef.current,
        padding: ["24px", "8px"],
        easing: "easeInOutQuad",
        duration: 100,
      });
    }
  }, [isSticky]);

  return (
    <>
      <header id="header" className="bg-white opacity-0">
        <nav
          className="mx-auto flex  items-center justify-between p-1 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                id="logo"
                className={clsx(
                  "h-20 w-auto rounded-full bg-white",
                  isSticky ? "fixed left-10 z-50 h-14" : ""
                )}
                src="/assets/logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
      {/* Bottom header */}
      <div
        ref={stickyRef}
        className={clsx(
          "bottom-header bg-[#F2BED1] hidden lg:flex lg:gap-x-12 lg:px-14 sticky py-2 top-0 z-40",
          isSticky ? "py-6" : "py-2"
        )}
      >
        <div className="flex justify-center w-full gap-10">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
