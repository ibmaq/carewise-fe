import Image from "next/image";
import Link from "next/link";
import {
  footerEmailIcon,
  footerFBIcon,
  footerInstaIcon,
  footerMapIcon,
  footerPhoneIcon,
  footerTwitterIcon,
} from "./UI/icons";

export default function Footer() {
  return (
    <footer className="bg-c-blue py-10">
      <div className="c-container-px flex flex-col gap-17.5">
        <div className="flex max-md:flex-col gap-8">
          <Image
            src={"/logo-wide.png"}
            alt="carewise-logo-colored"
            width={252.75}
            height={71.62}
            className="object-contain h-fit"
            unoptimized
          />
          <div className="flex flex-col gap-6 grow justify-between">
            <p className="text-c-gray">
              Carewise aims to empower Healthcare Providers with smart &
              streamlined Billing Solutions - so they can focus on care, not
              collections. Because it's not about being louder, It's about being
              smarter.
            </p>
            <div className="flex gap-8 items-center *:underline *:text-c-text-5 *:font-bold">
              <Link href={"/"}>Home</Link>
              <Link href={"/blogs"}>Blogs</Link>
              <Link href={"/contact"}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col grow border border-l border-black/10"></div>
          <div className="flex flex-col gap-2 grow justify-between w-full max-w-53">
            <p className="text-c-gray">Contact Us</p>
            <div className="flex gap-2 items-center">
              <span>{footerPhoneIcon}</span>
              <p className="text-base/tight text-c-text-3 -tracking-tighter">
                (281) 540-9005
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span>{footerEmailIcon}</span>
              <p className="text-base/tight text-c-text-3 -tracking-tighter">
                Info@Carewisembs.com
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span>{footerMapIcon}</span>
              <p className="text-base/tight text-c-text-3 -tracking-tighter">
                9900 Broadway St, Pearland, TX 77584, USA
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5 w-full flex justify-between border-t border-black/10">
          <p>Carewise. All right reserved. © 2025</p>
          <div className="flex gap-4 items-center">
            <span>{footerTwitterIcon}</span>
            <span>{footerInstaIcon}</span>
            <span>{footerFBIcon}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
