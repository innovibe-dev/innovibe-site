import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#17243A]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-16 pt-16">
            {/* Logo + About */}
            <div className="col-span-full lg:col-span-2">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center">
                  <Image
                    src={logo}
                    alt="EVenues Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-gray-300 max-w-xs mt-6">
                  India&apos;s leading electric vehicle service provider with
                  comprehensive EV solutions across the nation.
                </p>

                {/* Social Icons - moved here */}
                <div className="flex gap-4 mt-6">
                  {/* Instagram */}
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.825 0 5.555.01 4.702.048 3.85.088 3.27.207 2.76.393a4.61 4.61 0 0 0-1.67 1.093A4.61 4.61 0 0 0 .393 3.156C.207 3.666.088 4.246.048 5.098.01 5.951 0 6.221 0 8c0 1.779.01 2.049.048 2.902.04.852.159 1.432.345 1.942.186.51.44.94.819 1.319.379.379.809.633 1.319.819.51.186 1.09.305 1.942.345.853.038 1.123.048 2.902.048 1.779 0 2.049-.01 2.902-.048.852-.04 1.432-.159 1.942-.345a4.61 4.61 0 0 0 1.67-1.093 4.61 4.61 0 0 0 1.093-1.67c.186-.51.305-1.09.345-1.942.038-.853.048-1.123.048-2.902 0-1.779-.01-2.049-.048-2.902-.04-.852-.159-1.432-.345-1.942a4.61 4.61 0 0 0-1.093-1.67A4.61 4.61 0 0 0 13.24.393c-.51-.186-1.09-.305-1.942-.345C10.049.01 9.779 0 8 0zM8 3.891a4.109 4.109 0 1 1 0 8.218 4.109 4.109 0 0 1 0-8.218zM12.406 2.594a.96.96 0 1 1-1.922 0 .96.96 0 0 1 1.922 0zM8 5.255a2.745 2.745 0 1 0 0 5.49 2.745 2.745 0 0 0 0-5.49z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#FF0000] hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h-.002C3.662 1.999 0 5.66 0 10.051c0 4.39 3.662 8.051 8.049 8.051h.002c4.388 0 8.049-3.661 8.049-8.051 0-4.391-3.661-8.052-8.049-8.052zM6.4 12.634V7.466l4.267 2.584-4.267 2.584z" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#1DA1F2] hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#0077B5] hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.59V6.169H2.542v7.421h2.401zM3.743 5.188c.837 0 1.355-.553 1.355-1.248-.015-.709-.518-1.248-1.34-1.248-.822 0-1.356.54-1.356 1.248 0 .695.518 1.248 1.326 1.248h.015zM13.458 13.59V9.359c0-2.26-1.206-3.315-2.815-3.315-1.295 0-1.87.713-2.193 1.213h-.03V6.169H6.019c.03.633 0 7.421 0 7.421h2.401v-4.142c0-.221.015-.442.08-.6.173-.442.569-.9 1.232-.9.87 0 1.219.678 1.219 1.671v3.971h2.507z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100 uppercase">
                Quick Links
              </h4>
              <div className="mt-6 grid space-y-3">
                {["Home", "EV Services", "About", "Blog", "Contact"].map(
                  (link, i) => (
                    <p key={i}>
                      <a
                        className="inline-flex gap-x-2 text-base text-gray-300 hover:text-gray-400 transition-all duration-300"
                        href="#"
                      >
                        {link}
                      </a>
                    </p>
                  )
                )}
              </div>
            </div>

            {/* Head Office (on the right side now) */}
            <div className="col-span-1 lg:col-start-5">
              <h4 className="font-semibold text-gray-100 uppercase">
                Head Office
              </h4>
              <div className="text-sm text-white">
                <br />

                <p>D.No: 47-10-25, Dwaraka Nagar,</p>
                <p>Visakhapatnam, Andhra Pradesh - 530016</p>
                {/* Contact */}
                <div className="mt-6 grid space-y-3">
                  <a
                    className="inline-flex items-center gap-x-4 text-gray-300 hover:text-gray-400 transition-all duration-300"
                    href="mailto:contact@evenuesmobility.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    contact@evenuesmobility.com
                  </a>
                  <a
                    className="inline-flex items-center gap-x-4 text-gray-300 hover:text-gray-400 transition-all duration-300"
                    href="tel:+919876543210"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +91 9876543210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 bg-[#1C2940]">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-sm text-white">
                © 2025 EVenues Mobility Everywhere Mobility India Pvt. Ltd.
                All rights reserved.
                <br />
                Authorized dealer for Hero Electric, Okinawa, Ather, TVS iQube,
                and other leading EV brands
                <br />
                Privacy Policy | Terms & Conditions | Refund Policy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
