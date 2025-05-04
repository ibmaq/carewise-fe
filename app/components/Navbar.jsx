"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuLinks = [
  { name: "Home", link: "/" },
  { name: "Blogs", link: "/blogs" },
  { name: "Services", link: "/#services" },
  { name: "Privacy Policy", link: "/privacy-policy" },
];
export default function Navbar() {
  return (
    <>
      <div className="w-full fixed top-6.5 max-md:hidden">
        <div className="bg-white p-3 rounded-3xl flex justify-between items-center w-full max-w-navbar mx-auto shadow border border-c-gray-2">
          <div className="flex gap-10 items-center">
            <Link href={"/"}>
              <Image
                src={"/logo-wide.png"}
                alt="carewise-logo-colored"
                width={166}
                height={47.35}
                unoptimized
              />
            </Link>
            {menuLinks.map(({ name, link }, linkID) => (
              <Link key={linkID} href={link} className="capitalize">
                {name}
              </Link>
            ))}
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
        <Link href={"/"}>
          <Image
            src={"/logo-wide.png"}
            alt="carewise-logo-colored"
            width={136}
            height={38.79}
            className={`z-1 transition-opacity duration-300 ease-linear ${
              isActive
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto delay-150"
            }`}
          />
        </Link>
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
          <Link href={"/"}>
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
          </Link>
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
                  >
                    {name}
                  </Link>
                </div>
              </li>
            ))}
            <Link
              href={"/contact"}
              onClick={() => {
                setIsActive(!isActive);
                document.body.style.overflow = isActive ? "auto" : "hidden";
              }}
            >
              <button className="c-btn btn-pr hover:shadow mt-5">
                Schedule a Consultation Now!
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
