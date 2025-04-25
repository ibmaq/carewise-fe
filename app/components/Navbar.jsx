"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuLinks = [
  { name: "Home", link: "/" },
  { name: "Blogs", link: "/" },
  { name: "Contact", link: "/contact" },
];
export default function Navbar() {
  return (
    <>
      <div className="w-full fixed top-6.5 max-md:hidden">
        <div className="bg-white p-3 rounded-xl flex justify-between items-center w-full max-w-navbar mx-auto shadow">
          <div className="flex gap-10 items-center">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt="carewise-logo-colored"
                width={42}
                height={33.2}
              />
            </Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/blogs"}>Blogs</Link>
          </div>
          <Link href={"/contact"}>
            <button className="c-btn btn-pr hover:shadow">
              Schedule a Consultation Now!
            </button>
          </Link>
        </div>
      </div>

      <MobileNav />
    </>
  );
}

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        className={`fixed top-0 w-full h-18 flex justify-between items-center p-4 md:hidden ${
          isActive ? "" : "backdrop-blur-sm bg-white/80"
        }
        `}
      >
        <Image
          src={"/logo.png"}
          alt="carewise-logo-colored"
          width={42}
          height={33.2}
          className={`z-1 transition-opacity duration-300 ease-linear ${
            isActive
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto delay-150"
          }`}
        />
        <span className="xl:hidden size-8 z-1">
          <svg
            className={`text-black menu__icon ${isActive ? "active" : ""}`}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setIsActive(!isActive);
              document.body.style.overflow = isActive ? "auto" : "hidden";
            }}
          >
            <path
              className="line top"
              d="M5.3335 10.6666H26.6668"
              stroke="currentColor"
              strokeWidth="1.04167"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="line bottom"
              d="M5.3335 21.3334H26.6668"
              stroke="currentColor"
              strokeWidth="1.04167"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div
          className={`fixed inset-0 top-0 md:top-33 w-full md:hidden transition-all duration-300 ease-linear backdrop-blur-md ${
            isActive ? "pt-20 p-4 h-full" : "h-0 delay-200"
          } bg-stone-100/60`}
        >
          <Image
            src={"/logo.png"}
            alt="carewise-logo-colored"
            width={100}
            height={80}
            className={`z-1 mx-auto py-5 transition-opacity duration-300 ease-linear ${
              isActive
                ? "opacity-100 pointer-events-auto delay-150"
                : "opacity-0 pointer-events-none"
            }`}
          />
          <ul
            className={`text-center divide-y transition-opacity duration-300 ease-linear ${
              isActive
                ? "opacity-100 pointer-events-auto delay-150"
                : "opacity-0 pointer-events-none"
            } divide-black/10`}
          >
            {menuLinks.map(({ name, link }, linkID) => (
              <li key={linkID} className={`w-full relative bg-white/50`}>
                <div className="flex gap-2 justify-center items-center px-4">
                  <Link
                    href={link}
                    className="text-lg/1.2 font-medium w-full py-5 opacity-80 text-stone-800"
                    onClick={() => {
                      setIsActive(!isActive);
                      document.body.style.overflow = isActive
                        ? "auto"
                        : "hidden";
                    }}
                    scroll={false}
                  >
                    {name}
                  </Link>
                </div>
              </li>
            ))}
            {/* <button className="mt-4 py-5 w-full text-lg/120 font-medium text-white border border-primary bg-primary hover:backdrop-blur-xl hover:bg-blue-800 hover:border-blue-800 transition-all ease-in-out duration-300">
            Get in Touch With Us
          </button> */}
          </ul>
        </div>
      </div>
    </>
  );
};
