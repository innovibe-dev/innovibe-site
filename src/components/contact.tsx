import React from "react";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Navigation from "@/components/Navigation";
import Faqs from "@/components/Faqs";

const ContactPage = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-gray-50">
        <Navigation />
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center my-0">
          <h2 className="text-3xl md:text-4xl/tight font-semibold mt-4">
                Contact Us
              </h2>
          <br />
          <p className="text-lg text-gray-700 max-w-2xl">
            Get in touch with India's leading electric vehicle service provider.
            <br />
            We're here to help you with all your EV needs.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          {/* LEFT SIDE */}
          <div className="p-0 self-center">
            <div className="mt-0 p-0">
              <h3 className="text-3xl md:text-4xl/tight font-semibold mt-4">
                Send us a Message
              </h3>
              <p className="text-base text-muted mt-4">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            {/* Address */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <IconifyIcon
                  icon="lucide:map-pin"
                  className="text-2xl text-primary"
                />
              </div>
              <div>
                <h5 className="text-base text-muted font-medium mb-1">
                  D.No: 47-10-25, Dwaraka Nagar,
                  <br />
                  Visakhapatnam, Andhra Pradesh - 530016
                </h5>
                <a
                  href="#"
                  className="text-xs text-primary font-bold uppercase"
                >
                  See more
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <IconifyIcon
                  icon="lucide:mail"
                  className="text-2xl text-primary"
                />
              </div>
              <div>
                <h5 className="text-base text-muted font-medium mb-1">
                  contact@evenuesmobility.com
                </h5>
                <a
                  href="#"
                  className="text-xs text-primary font-bold uppercase"
                >
                  Say hello
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <IconifyIcon
                  icon="lucide:smartphone"
                  className="text-2xl text-primary"
                />
              </div>
              <div>
                <h5 className="text-base text-muted font-medium mb-1">
                 +91 9876543210
                </h5>
                <a
                  href="#"
                  className="text-xs text-primary font-bold uppercase"
                >
                  Call now
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="lg:col-span-2 lg:ms-24 self-center">
            <div className="p-6  md:p-12 rounded-md shadow-lg bg-white mt-16">
              <form>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="formFirstName"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                      id="formFirstName"
                      placeholder="Your first name..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="formLastName"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                      id="formLastName"
                      placeholder="Your last name..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="formEmail"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                      id="formEmail"
                      placeholder="Your email..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="formPhone"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                      id="formPhone"
                      placeholder="Type phone number..."
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mb-4">
                      <label
                        htmlFor="formMessages"
                        className="block text-sm/normal font-semibold text-black mb-2"
                      >
                        Messages
                      </label>
                      <textarea
                        className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formMessages"
                        rows={4}
                        placeholder="Type messages..."
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="py-2 px-6 rounded-md text-base flex items-center justify-center gap-2 border border-primary text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium"
                    style={{ width: "200px" }}
                  >
                    Send Messages
                    <IconifyIcon icon="lucide:send" className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Faqs />
  </>
  );
};

export default ContactPage;
