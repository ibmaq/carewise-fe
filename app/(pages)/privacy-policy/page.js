import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="blogs">
        <div className="header bg-primary-blue flex justify-center md:items-center flex-col gap-5 text-white pb-5 px-4">
          <p className="text-white/70 text-base font-bold">RESOURCES</p>
          <h3 className="font-montserrat text-10.5 md:text-20.5 leading-1.2 font-medium -tracking-2">
            Privacy Policy
          </h3>
          <p className="text-xl/1.4">
            Explore expert tips, industry news, and helpful resources to keep
            your practice ahead.
          </p>
        </div>
        <div className="bg-white -mt-20 pb-20 rounded-xl c-container-px mx-auto pt-10 lg:pt-20 flex flex-col gap-8 privacy-policy px-4 2xl:px-0 ">
          <div className="flex flex-col gap-4">
            <h4>Who Are We?</h4>
            <p className="text-lg text-gray-600 font-normal">
              We’re dedicated to streamlining healthcare administration,
              optimizing revenue, and supporting exceptional patient care. Trust
              us to be your reliable partner in success. <br />
              <br /> With a client-centered approach, we go above and beyond to
              support your practice. From expert credentialing to comprehensive
              billing solutions, we’re here to drive your growth and financial
              success.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4>About this Policy</h4>
            <div className="flex flex-col gap-20">
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Information We Collect:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Names, addresses, contact information.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Medical information: treatment plans, medical histories,
                  diagnosis codes.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Financial information: billing, insurance details.
                </p>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  How We Protect Information:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Secure, password-protected databases.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Restricted access on a need-to-know basis.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Regularly updated security procedures.
                </p>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  No Sharing of Information:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  We do not share or sell personal or medical information.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  No mobile information will be shared with third
                  parties/affiliates for marketing/promotional purposes.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  All the above categories exclude text messaging originator
                  opt-in data and consent; this information will not be shared
                  with any third parties.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Privacy Matters</h4>
            <div className="flex flex-col gap-20">
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Your Rights:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Access, review, correct, or delete your information.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Opt-out of marketing communications.
                </p>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Changes to This Policy:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  We may update the policy to reflect business practices or
                  legal requirements.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Updated policy will be posted on our website.z
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-600 font-normal">
                  <span className="text-xl/normal font-bold text-gray-700 font-montserrat">
                    Contact Us:
                  </span>{" "}
                  For questions or concerns, contact info@carewisembs.com.
                </p>
              </div>

              <p className="text-lg text-gray-600 font-normal">
                By using our services, you acknowledge and consent to this
                privacy policy.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Consent Protection</h4>
            <ul className="list-disc list-outside ml-6">
              <li>
                At Carewise, we value your privacy. When you provide us with
                your consent, it remains strictly within our organization and is
                not shared with any third parties.
              </li>
              <li>
                We collect and use your personal information solely for the
                purposes of providing you with our services, responding to your
                inquiries, and improving your experience with us. This
                information may include your name, email address, phone number,
                and any other details you voluntarily provide.
              </li>
              <li>
                Rest assured, we do not engage in the sharing, selling, or
                trading of your information with outside parties for marketing
                or promotional purposes.
              </li>
              <li>
                If you have any questions about how we handle your information
                or wish to update your preferences, please contact us using the
                information provided on our website.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4>How We Safeguard Your Data</h4>
            <div className="flex flex-col gap-4">
              <p className="text-lg text-gray-600 font-normal">
                Carewise employs robust security measures to protect your data,
                including:
              </p>
              <ul className="list-disc list-outside ml-6">
                <li>
                  Encryption: All sensitive data is encrypted during
                  transmission and storage.
                </li>
                <li>
                  Access Control: Restricted access ensures only authorized
                  personnel can handle data.
                </li>
                <li>
                  Regular Audits: Frequent system checks and compliance audits
                  to identify and address vulnerabilities.
                </li>
                <li>
                  Secure Infrastructure: Use of advanced firewalls and intrusion
                  detection systems to protect our servers.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Securing Provider Data</h4>
            <p className="text-lg text-gray-600 font-normal">
              We prioritize the security and confidentiality of provider data.
              We adhere to all privacy regulations, share data only with
              authorized parties, and implement strict protocols to safeguard
              information. Our robust security measures, including encryption
              and secure storage, ensure your data is protected. Trust us to
              maintain the highest standards in data privacy and security
            </p>
          </div>
          <Image
            src="/images/blogs/common-medical-billing-mistakes/patient-hospital-form-research-document.webp"
            alt="patient-hospital-form-research-document"
            width={720}
            height={480}
            className="rounded-xl my-12"
          />
          <div className="flex flex-col gap-4">
            <h4>Data Retention Practices</h4>
            <p className="text-lg text-gray-600 font-normal">
              We retain your data only as long as necessary to meet legal and
              regulatory requirements. Our policy ensures appropriate data
              retention and secure disposal or anonymization once the retention
              period expires.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Refund Policy</h4>
            <p className="text-lg text-gray-600 font-normal">
              We offer full refunds if services are canceled before work begins.
              If canceled after starting, refunds are prorated based on work
              completed. Unsatisfied clients can request refunds within 30 days
              for a review and possible full or partial refund. Refunds are
              processed within 7-14 business days. Some exceptions may apply due
              to circumstances beyond our control. Contact us at
              ‘info@carewisembs.com’ for questions or refund requests.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Stay Connected</h4>
            <ul className="list-disc list-outside ml-6">
              <li>
                Regular Updates: Get the latest news and updates about our
                services.
              </li>
              <li>
                Customer Support: Reach out for any questions or assistance you
                need.
              </li>
              <li>
                Exclusive Offers: Be the first to know about special offers and
                promotions.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4>SMS Terms & Conditions</h4>
            <div className="flex flex-col gap-20">
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Your Rights:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Access, review, correct, or delete your information.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Opt-out of marketing communications.
                </p>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  SMS Consent Communication:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  The information (e.g., phone numbers) obtained as part of the
                  SMS consent process will not be shared with third parties for
                  marketing purposes. CAREWISE is committed to safeguarding your
                  personal information and using it solely for purposes directly
                  related to your care and billing services.
                </p>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Types of SMS Communications:
                </p>
                <br />
                <div className="flex flex-col gap-4">
                  <p className="text-lg text-gray-600 font-normal">
                    If you have consented to receive text messages from
                    CAREWISE, you may receive messages related to the following:
                  </p>
                  <ul className="list-disc list-outside ml-6">
                    <li>Appointment reminders</li>
                    <li>Follow-up communications regarding your practice</li>
                    <li>Billing updates or inquiries</li>
                    <li>Insurance verification updates</li>
                  </ul>
                  <p className="text-lg text-gray-600 font-normal">
                    <span className="font-bold">Example:</span>{" "}
                    <span className="italic text-gray-700">
                      “Hello, this is a friendly reminder of your upcoming
                      appointment with your patient Mr. Smith at Midtown Clinic
                      on May 12 at 2:00 PM. You can reply STOP to opt out of SMS
                      messaging from CAREWISE at any time.”
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Message Frequency:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Message frequency may vary. You may receive up to 2 SMS
                  messages per week regarding your appointments, billing status,
                  or account notifications. Frequency will depend on the level
                  of activity and engagement with our services.
                </p>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Potential Fees for SMS Messaging:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  Please note that standard message and data rates may apply,
                  depending on your carrier’s pricing plan. These fees may vary
                  if the message is sent domestically or internationally.
                </p>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Opt-In Method:
                </p>
                <br />
                <div className="flex flex-col gap-4">
                  <p className="text-lg text-gray-600 font-normal">
                    You may opt-in to receive SMS messages from CAREWISE through
                    one or more of the following methods:
                  </p>
                  <ul className="list-disc list-outside ml-6">
                    <li>
                      Verbally, during a phone conversation with our staff
                    </li>
                    <li>
                      By submitting an online form on our official website
                    </li>
                    <li>
                      By completing a paper form during in-office visits or
                      consultations
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Opt-Out Method:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  You can opt out of receiving SMS messages at any time. To do
                  so, simply reply "STOP" to any SMS message you receive.
                  Alternatively, you can contact us directly to request removal
                  from our messaging list.
                </p>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Help:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  If you are experiencing any issues, you can reply with the
                  keyword HELP. Or, you can get help directly from us at
                  https://www.carewisembs.com/contact.
                </p>
                <br />
                <p className="text-lg text-gray-600 font-bold">
                  Additional Options:
                </p>
                <br />
                <p className="text-lg text-gray-600 font-normal">
                  If you do not wish to receive SMS messages, you can choose not
                  to check the SMS consent box on our forms.
                </p>
              </div>
              <div>
                <p className="text-xl/normal font-bold text-gray-700 font-montserrat">
                  Standard Messaging Disclosures:
                </p>
                <br />
                <ul className="list-disc list-outside ml-6">
                  <li>Message and data rates may apply</li>
                  <li>You can opt out at any time by texting "STOP"</li>
                  <li>
                    For assistance, text "HELP" or visit our{" "}
                    <Link href={"/privacy-policy"} className="text-primary-blue">Privacy Policy</Link> and
                    [Terms and Conditions] pages
                  </li>
                  <li>Message frequency may vary depending on service needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
