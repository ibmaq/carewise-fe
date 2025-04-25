import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-c-blue py-10">
      <div className="c-container-px flex flex-col gap-17.5">
        <div className="flex max-md:flex-col gap-8">
          <Image
            src={"/logo.png"}
            alt="carewise-logo-colored"
            width={258}
            height={204}
          />
          <div className="flex flex-col grow justify-between">
            <p className="text-c-gray">
              CarewiseMBS aims to empower independent healthcare providers with
              smart, streamlined billing solutions—so they can focus on care,
              not collections. Because it's not about being louder. It's about
              being smarter.
            </p>
            <div className="flex gap-8 items-center *:underline *:text-c-text-5 *:font-bold">
              <Link href={"/"}>Home</Link>
              <Link href={"/blogs"}>Blogs</Link>
              <Link href={"/contact"}>Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="pt-5 w-full flex justify-between border-t border-black/10">
          <p>Carewise. All right reserved. © 2025</p>
          {/* <p>Carewise. All right reserved. © 2025</p> */}
        </div>
      </div>
    </footer>
  );
}
