"use client";

import { Dialog, Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import { BiHeart, BiSearch, BiShoppingBag } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white z-50">
      <nav
        className="mx-auto flex max-w-[1380px] items-center justify-between px-6 p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="hidden flex-1 lg:flex">
          <Link href="#" className="text-small font-light leading-7 mx-4">
            RINGS
          </Link>
          <Link href="#" className="text-small font-light leading-7 mx-4">
            BRACELETS
          </Link>
          <Link href="#" className="text-small font-light leading-7 mx-4">
            EARRINGS
          </Link>
          <Link href="#" className="text-small font-light leading-7 mx-4">
            NECKLACES
          </Link>
        </div>
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <img className="h-20 w-auto" src="/assets/logo.svg" alt="" />
            <div className="flex flex-col items-center justify-center">
              <span className="font-black text-2xl font-cinzel">Shreeya</span>
              <span className="font-black text-base font-imfell">
                Traditions
              </span>
            </div>
          </a>
        </div>
        <div className="hidden flex-1 justify-end gap-8 lg:flex">
          <BiSearch
            style={{ height: 20, width: 20 }}
            className="relative z-30 cursor-pointer"
          />
          <BiHeart
            style={{ height: 20, width: 20 }}
            className="relative z-30 cursor-pointer"
          />
          <BiShoppingBag
            style={{ height: 20, width: 20 }}
            className="relative z-30 cursor-pointer"
          />
        </div>
        <div className="flex flex-1 justify-end gap-8 lg:hidden">
          <FaBars
            style={{ height: 20, width: 20 }}
            className="relative z-30 cursor-pointer text-rani"
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 focus-visible:outline-none">
              <span className="sr-only">Your Company</span>
              <img className="h-16 w-auto" src="/assets/logo.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  RINGS
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  BRACELETS
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  EARRINGS
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  NECKLACES
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
