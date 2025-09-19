"use client";
import logo from "@/assets/images/logo.png";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import useScrollEvent from "@/hooks/useScrollEvent";
import Gumshoe from "gumshoejs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof Gumshoe !== "undefined") {
      try {
        if (document.querySelector(".navbar-nav a") && navRef.current) {
          new Gumshoe(".navbar-nav a", { offset: 80 });
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const { scrollY } = useScrollEvent();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${
          scrollY >= 50 && " is-sticky"
        } fixed top-0 start-0 end-0 z-999 transition-all duration-500 py-2 items-center shadow-md lg:shadow-none [&.is-sticky]:bg-white [&.is-sticky]:backdrop-blur-md group [&.is-sticky]:shadow-md bg-white`}
        id="navbar"
      >
        <div className="container">
          <div className="flex lg:flex-nowrap flex-wrap items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="logo"
                className="h-[65px] w-[170px] "
            
                sizes="800vw"
              />
            </Link>
            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button
                onClick={toggleMenu}
                className="hs-collapse-toggle"
                type="button"
                id="hs-unstyled-collapse"
                data-hs-collapse="#navbarCollapse"
              >
                <IconifyIcon
                  icon="lucide:menu"
                  className="h-8 w-8 text-black"
                />
              </button>
            </div>
            <div
              className="navigation hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden items-center justify-center lg:flex mx-auto overflow-hidden mt-2 lg:mt-0 nav-light"
              id="navbarCollapse"
            >
              <ul
                className="navbar-nav flex-col lg:flex-row gap-y-2 flex items-center justify-center mx-auto"
                id="navbar-navlist"
              >
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark all duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary">
                  <Link
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary">
                  <Link
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="/ev-services"
                  >
                    EV Services
                  </Link>
                </li>

                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary">
                  <Link
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>

                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary">
                  <Link
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary">
                  <Link
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                  <div></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
