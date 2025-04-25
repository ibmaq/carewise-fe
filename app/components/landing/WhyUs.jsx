import { whyUsIcon1, whyUsIcon2, whyUsIcon3 } from "../UI/icons";

export default function WhyUs() {
  return (
    <section className="bg-c-blue-2 py-20">
      <div className="c-container-px flex flex-col gap-16">
        <div className="flex flex-col gap-3 text-center">
          <h3 className="font-montserrat text-5xl/tight font-semibold -tracking-2">
            Why are we the best option for your business?
          </h3>
          <p className="text-xl">
            Our Professional Billing Solutions Designed to Support Your Practice
          </p>
        </div>
        <div className="flex max-md:flex-col gap-4">
          <div className="rounded-tl-2xl max-md:rounded-tr-2xl md:rounded-bl-2xl bg-c-yellow flex flex-col p-4 gap-20">
            <div className="flex flex-col gap-3">
              <h4 className="font-montserrat text-8/1.2 -tracking-2">
                Experienced Team
              </h4>
              <span>{whyUsIcon1}</span>
            </div>
            <p className="text-lg/1.4">
              Years of expertise in handling complex medical billing processes
              with a focus on accuracy and efficiency.
            </p>
          </div>
          <div className="bg-primary-blue text-white flex flex-col p-4 gap-20">
            <div className="flex flex-col gap-3">
              <h4 className="font-montserrat text-8/1.2 -tracking-2">
                Transparent Billing
              </h4>
              <span>{whyUsIcon2}</span>
            </div>
            <p className="text-lg/1.4">
              Clear, upfront pricing with no hidden fees, ensuring complete
              transparency in every aspect of our service.
            </p>
          </div>
          <div className="rounded-br-2xl max-md:rounded-bl-2xl md:rounded-tr-2xl bg-c-green flex flex-col p-4 gap-20">
            <div className="flex flex-col gap-3">
              <h4 className="font-montserrat text-8/1.2 -tracking-2">
                Maximized Revenue
              </h4>
              <span>{whyUsIcon3}</span>
            </div>
            <p className="text-lg/1.4">
              We focus on optimizing your revenue cycle to ensure faster
              payments and improved cash flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
