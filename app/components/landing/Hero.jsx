import Link from "next/link";
import { rightArrowIcon } from "../UI/icons";

export default function Hero() {
  return (
    <header className="hero flex items-center">
      <div className="c-container">
        <div className="content-container flex flex-col gap-6.75 text-white">
          <h3 className="font-montserrat text-10.5 md:text-20.5 leading-1.2 font-light -tracking-2">
            <span className="font-semibold">
              Modern Medical Billing Solutions.
            </span>{" "}
            Maximise Revenue and Minimise Hassle
          </h3>
          <p className="text-xl/1.4">
            We help healthcare providers streamline revenue, reduce denials, and
            get paid faster without the stress
          </p>
          <div className="flex max-md:flex-col gap-4">
            <Link href={"/contact"}>
              <button className="c-btn btn-pr">
                Schedule a Consultation Now!
              </button>
            </Link>

            <button className="c-btn btn-sc">
              Learn more
              <span>{rightArrowIcon}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
