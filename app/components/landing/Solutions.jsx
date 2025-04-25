import { solutionIcon1, solutionIcon2, solutionIcon3 } from "../UI/icons";

export default function Solutions() {
  return (
    <section className="py-20">
      <div className="c-container-px flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-3 text-center">
          <h3 className="font-montserrat text-5xl/tight font-semibold -tracking-2">
            Our Medical Solutions
          </h3>
          <p className="text-xl">
            Our Professional Billing Solutions Designed to Support Your Practice
          </p>
        </div>
        <div className="flex max-md:flex-col gap-10 md:py-8">
          <div className="flex flex-col gap-5 w-full">
            <span className="mx-auto">{solutionIcon1}</span>
            <div className="flex flex-col gap-3 text-center">
              <h4 className="font-montserrat text-2xl/1.4 font-semibold -tracking-2">
                Insurance Claims Processing
              </h4>
              <p className="text-base/1.4">
                We handle all aspects of insurance claim submissions, ensuring
                accuracy and reducing the risk of delays or rejections.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <span className="mx-auto">{solutionIcon2}</span>
            <div className="flex flex-col gap-3 text-center">
              <h4 className="font-montserrat text-2xl/1.4 font-semibold -tracking-2">
                Enrolment & Credentialing
              </h4>
              <p className="text-base/1.4">
                We help healthcare providers get enrolled with insurance
                networks and maintain their credentials. Our team ensures
                accurate, timely submissions to avoid delays and keep your
                practice running smoothly
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <span className="mx-auto">{solutionIcon3}</span>
            <div className="flex flex-col gap-3 text-center">
              <h4 className="font-montserrat text-2xl/1.4 font-semibold -tracking-2">
                Revenue Cycle Management
              </h4>
              <p className="text-base/1.4">
                We manage the entire billing lifecycle, from patient intake to
                final payment, to improve cash flow and reduce billing errors.
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col gap-10 md:py-8">
          <div className="flex flex-col gap-5 w-full">
            <span className="mx-auto">{solutionIcon3}</span>
            <div className="flex flex-col gap-3 text-center">
              <h4 className="font-montserrat text-2xl/1.4 font-semibold -tracking-2">
                EFT / ERA Enrolment
              </h4>
              <p className="text-base/1.4">
                We handle your Electronic Funds Transfer and Remittance Advice
                enrollment for quicker payments and easier reconciliation.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <span className="mx-auto">{solutionIcon1}</span>
            <div className="flex flex-col gap-3 text-center">
              <h4 className="font-montserrat text-2xl/1.4 font-semibold -tracking-2">
                Denial Management Resolution
              </h4>
              <p className="text-base/1.4">
                We swiftly address and resolve denied claims by identifying
                issues and resubmitting them for faster payment processing
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <span className="mx-auto">{solutionIcon2}</span>
            <div className="flex flex-col gap-3 text-center">
              <h4 className="font-montserrat text-2xl/1.4 font-semibold -tracking-2">
                Coding Compliance Audits
              </h4>
              <p className="text-base/1.4">
                Our detailed coding audits ensure compliance with industry
                standards, preventing costly errors and optimizing
                reimbursement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
