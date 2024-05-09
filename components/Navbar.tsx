import clsx from "clsx";
import { Rubik } from "next/font/google";
import Link from "next/link";
import { BiHeart, BiSearch, BiShoppingBag } from "react-icons/bi";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const Navbar = () => {
  return (
    <header className={clsx(rubik.className, "relative z-10")}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1 gap-x-12">
          <Link href="#" className="text-sm font-semibold leading-6 flex flex-col items-center">
            Home
            <div className="h-[3px] w-3 bg-rani rounded"></div>
          </Link>
          <Link href="#" className="text-sm font-normal leading-6">
            Product's
          </Link>
          <Link href="#" className="text-sm font-normal leading-6">
            Discover
          </Link>
          <Link href="#" className="text-sm font-normal leading-6">
            Blogs
          </Link>
        </div>
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <img className="h-20 w-auto" src="/assets/logo.svg" alt="" />
            {/* <span className={clsx("font-black text-2xl")}>।।श्रीया।।</span> */}
          </a>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <BiSearch style={{ height: 20, width: 20 }} />
          <BiHeart style={{ height: 20, width: 20 }} />
          <BiShoppingBag style={{ height: 20, width: 20 }} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
