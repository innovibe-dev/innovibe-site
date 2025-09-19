"use client";

import React, { useState, FormEvent } from "react";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Navigation from "@/components/Navigation";
import Faqs from "@/components/Faqs";
import { contactApi } from "@/services/contact.service";
import { toast } from "react-hot-toast";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submission started with data:", formData);

    // Basic validation
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      const errorMsg = "Validation failed: Please fill in all required fields";
      console.error(errorMsg);
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      const errorMsg = `Validation failed: Invalid email format - ${formData.email}`;
      console.error(errorMsg);
      toast.error("Please enter a valid email address");
      return;
    }

    // Phone validation (simple check for at least 10 digits)
    const phoneRegex = /^\d{10,}$/;
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      const errorMsg = `Validation failed: Invalid phone number - ${formData.phone} (cleaned: ${cleanPhone})`;
      console.error(errorMsg);
      toast.error("Please enter a valid phone number (at least 10 digits)");
      return;
    }

    console.log("Form validation passed. Submitting form...");
    setIsSubmitting(true);

    try {
      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: cleanPhone,
        message: formData.message.trim(),
      };

      console.log(
        "Sending contact form data:",
        JSON.stringify(payload, null, 2)
      );

      const response = await contactApi.submitContactForm(payload);
      console.log("Form submission successful. Response:", response);

      if (response.status) {
        const successMsg =
          "Form submitted successfully. Thank you for your message!";
        console.log(successMsg);
        toast.success(successMsg);

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        console.log("Form has been reset");
      } else {
        toast.error(
          response.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "An error occurred while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
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
              Get in touch with India&apos;s leading electric vehicle service
              provider.
              <br />
              We&apos;re here to help you with all your EV needs.
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
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
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
                  Visakhapatnam, Andhra Pradesh, India
                  </h5>
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
                    customercare@innovibemobility.com
                  </h5>
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
                    +91 9429695786
                  </h5>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (FORM) */}
            <div className="lg:col-span-2 lg:ms-24 self-center">
              <div className="p-6  md:p-12 rounded-md shadow-lg bg-white mt-16">
                <form onSubmit={handleSubmit}>
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
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name..."
                        disabled={isSubmitting}
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
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name..."
                        disabled={isSubmitting}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email..."
                        disabled={isSubmitting}
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
                        type="tel"
                        className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formPhone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Type phone number..."
                        disabled={isSubmitting}
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit phone number"
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
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Type messages..."
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`py-2 px-6 rounded-md text-base flex items-center justify-center gap-2 border ${isSubmitting ? "bg-primary/70" : "bg-primary hover:bg-primaryDark"} text-white transition-all duration-500 font-medium`}
                      style={{ width: "200px" }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <IconifyIcon icon="lucide:send" className="w-5 h-5" />
                        </>
                      )}
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
