import Image from "next/image";
import React from "react";
import iterior from "@/assets/images/interior.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative pt-32 pb-20 bg-gray-200/40 bg-[url(../images/home/bg-3.png)] bg-no-repeat bg-cover"
      id="home"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
          <div className="">
            <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-black tracking-normal capitalize leading-normal font-bold max-w-2xl">
              Premium Electric Vehicles & Expert Services{" "}
            </h1>
            <p className="text-base font-medium text-muted mt-3 capitalize">
              Discover our wide range of electric two-wheelers, three-wheelers,
              and four-wheelers with professional maintenance and conversion
              services.
            </p>
            <div className="flex flex-wrap mt-9 text-center gap-3">
              <Link
                href="./ev-services"
                className="py-2 px-6 rounded-md text-white text-base bg-primary hover:bg-primaryDark border border-primary hover:border-primaryDark transition-all duration-500 font-medium"
              >
                Explore Services
              </Link>
              <Link
                href="./contact"
                className="py-2 px-6 text-primary rounded-md border border-primary text-base hover:border-primary hover:bg-primary hover:text-white transition-all duration-500 font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src={iterior}
              alt="EV Mobile App Preview"
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
