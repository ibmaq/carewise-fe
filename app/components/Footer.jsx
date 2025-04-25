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
              Carewise gives independent pharmacies the same marketing and
              outreach firepower the chains use—tailored to your local market.
              <br />
              <br />
              We help you increase referrals, strengthen doctor relationships,
              and grow predictably—without adding to your workload.
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
