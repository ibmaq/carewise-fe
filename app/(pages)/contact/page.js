"use client";
import {
  contactEmailIcon,
  contactMapIcon,
  contactPhoneIcon,
} from "@/app/components/UI/icons";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errorConfig, setErrorConfig] = useState({
    show: false,
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName) {
      setErrorConfig({ show: true, position: "fn" });
      return;
    }
    if (!formData.lastName) {
      setErrorConfig({ show: true, position: "ln" });
      return;
    }
    if (!formData.email) {
      setErrorConfig({ show: true, position: "email" });
      return;
    }
    setErrorConfig({ show: false, position: "" });
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success && data.response.error === null) {
        setFormData({
          fullName: "",
          businessEmail: "",
          projectDetails: "",
          selectedServices: [],
          budget: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // alert("Something went wrong.");
      setErrorConfig({ show: true, position: "submit" });
      setTimeout(() => {
        setErrorConfig({ show: false, position: "" });
      }, 3000);
    }
  };

  return (
    <section>
      <div className="c-container-px flex flex-col gap-10 pt-24 md:pt-40.5 pb-20">
        <div className="flex flex-col gap-5">
          <p className="text-c-text-5 text-base font-bold">CONTACT US</p>
          <h3 className="font-montserrat text-5xl/tight font-semibold -tracking-2">
            Let’s start Billing Together!
          </h3>
          <p className="text-xl">
            We’d love to hear from you! Reach out with any questions or to
            schedule a consultation.
          </p>
        </div>
        <div className="flex max-md:flex-col gap-4">
          <div className="w-full rounded-tl-2xl max-md:rounded-tr-2xl md:rounded-bl-2xl bg-c-sky-blue flex flex-col p-4 gap-3 font-medium">
            <span>{contactPhoneIcon}</span>
            <h4 className="font-montserrat text-2xl max-md:font-bold md:text-6.5/1.2 md:-tracking-2">
              (281) 540-9005
            </h4>
            <p className="text-lg/1.4">Phone Number</p>
          </div>
          <div className="w-full bg-primary-blue flex flex-col p-4 gap-3 text-white font-medium">
            <span>{contactEmailIcon}</span>
            <h4 className="font-montserrat text-2xl max-md:font-bold md:text-6.5/1.2 md:-tracking-2">
              Info@carewise.com
            </h4>
            <p className="text-lg/1.4">Email</p>
          </div>
          <div className="w-full rounded-br-2xl max-md:rounded-bl-2xl md:rounded-tr-2xl bg-c-green flex flex-col p-4 gap-3 font-medium">
            <span>{contactMapIcon}</span>
            <h4 className="font-montserrat text-2xl max-md:font-bold md:text-6.5/1.2 md:-tracking-2">
              9900 Broadway St, Pearland, TX 77584, USA
            </h4>
            <p className="text-lg/1.4">Address</p>
          </div>
        </div>
      </div>
      <div className="image-banner contact"></div>
      <div className="c-container-px flex flex-col items-center gap-8 py-20">
        <div className="flex flex-col gap-3 md:text-center">
          <h3 className="font-montserrat text-5xl/tight font-semibold -tracking-2">
            Get In Touch with our Team
          </h3>
          <p className="text-xl">Our team will get back to you right away!</p>
        </div>
        <form className="flex flex-col gap-6 w-full max-w-[584px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first-name"
                className="text-sm/normal font-extrabold text-custom-gray-900"
              >
                First name*
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name.."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary bg-gray-50 focus:bg-white focus:shadow-sm"
                required
              />
              {errorConfig.show && errorConfig.position === "fn" && (
                <p className="text-red-500 text-xs/normal">
                  This field is required!
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="last-name"
                className="text-sm/normal font-extrabold text-custom-gray-900"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name.."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary bg-gray-50 focus:bg-white focus:shadow-sm"
                required
              />
              {errorConfig.show && errorConfig.position === "ln" && (
                <p className="text-red-500 text-xs/normal">
                  This field is required!
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm/normal font-extrabold text-custom-gray-900"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email.."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary bg-gray-50 focus:bg-white focus:shadow-sm"
              required
            />
            {errorConfig.show && errorConfig.position === "email" && (
              <p className="text-red-500 text-xs/normal">
                This field is required!
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-sm/normal font-extrabold text-custom-gray-900"
            >
              Phone Number
            </label>
            <div className="relative">
              <span className="text-gray-500 size-4 absolute top-4 left-4">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.37722 10.2051L7.37828 10.2061C7.75094 10.5776 8.25567 10.7861 8.78184 10.7861C9.30801 10.7861 9.81273 10.5776 10.1854 10.2061L10.1859 10.2056L10.7107 9.68093C10.7107 9.68089 10.7108 9.68085 10.7108 9.68081C10.896 9.49629 11.1468 9.39266 11.4083 9.39266C11.6698 9.39266 11.9206 9.49629 12.1058 9.68081C12.1058 9.68085 12.1059 9.68089 12.1059 9.68093L13.1559 10.7308L13.1715 10.7464L13.1885 10.7606C13.286 10.8423 13.3645 10.9443 13.4183 11.0596C13.4721 11.1748 13.5 11.3005 13.5 11.4276C13.5 11.5548 13.4721 11.6805 13.4183 11.7957C13.3645 11.911 13.286 12.013 13.1885 12.0947L13.1715 12.1089L13.1559 12.1245C11.8948 13.3858 10.5872 13.6878 9.28208 13.3989C7.93597 13.101 6.53631 12.1601 5.18593 10.81C3.83563 9.45986 2.89644 8.06134 2.60006 6.71638C2.31269 5.41237 2.61613 4.10527 3.87795 2.84364L3.89346 2.82814L3.90755 2.81134C3.98929 2.71385 4.09142 2.63546 4.20673 2.58167C4.32205 2.52788 4.44775 2.5 4.57501 2.5C4.70226 2.5 4.82797 2.52788 4.94329 2.58167C5.0586 2.63546 5.16072 2.71385 5.24247 2.81134L5.25656 2.82814L5.27206 2.84364L6.32227 3.89368C6.32233 3.89374 6.32239 3.8938 6.32244 3.89386C6.50703 4.0789 6.61068 4.32957 6.61068 4.5909C6.61068 4.8522 6.50705 5.10285 6.32249 5.28789C6.32242 5.28797 6.32234 5.28804 6.32227 5.28811L5.79735 5.81295L5.79698 5.81332C5.42519 6.18585 5.21637 6.69065 5.21637 7.21695C5.21637 7.7432 5.42514 8.24794 5.79685 8.62045C5.79689 8.62049 5.79694 8.62053 5.79698 8.62058L7.37722 10.2051Z"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                </svg>
              </span>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone number..."
                className="w-full px-4 pl-11 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary bg-gray-50 focus:bg-white focus:shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm/normal font-extrabold text-custom-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write text here ..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary bg-gray-50 focus:bg-white focus:shadow-sm"
            ></textarea>
            <p className="mt-2 text-xs/normal text-gray-500 italic">
              By providing my phone number to “Carewise”, I agree and
              acknowledge that “Carewise” may send text messages to my wireless
              phone number for any purpose. Message and data rates may apply.
              Message frequency will vary, and you will be able to Opt-out by
              replying “STOP”. For more information on how your data will be
              handled please visit{" "}
              <Link href="/privacy-policy" className="text-primary">
                here
              </Link>
              .
            </p>
          </div>

          {errorConfig.show && errorConfig.position === "submit" && (
            <p className="bg-red-500 w-full text-center text-white text-sm/normal p-4">
              There was an issue, please try again later!
            </p>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-4 py-3 mt-2 text-white bg-primary-blue rounded-xl shadow-lg hover:bg-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue -tracking-1 font-montserrat font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
