import React from "react";
import "swiper/css";
import Hero from "@/app/(demos)/layout-3/components/Hero";
import Newsletter from "@/components/Newsletter";
import Contact from "@/app/contact/page";
import Navigation from "@/components/Navigation";
import PartnerSection from "@/components/partnersection";
import Services from "@/components/services";
import About from "@/components/about";
import Blogpage from "@/components/blog";
import ElectricVehicleServices from "@/components/otherservicecard";

const page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <ElectricVehicleServices />
      <Newsletter />
      <About />
      <Blogpage limit={3} showHeader={false} />
      <PartnerSection />
      <Contact />
    </>
  );
};

export default page;
