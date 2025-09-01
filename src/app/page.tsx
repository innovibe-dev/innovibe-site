import React from "react";
import "swiper/css";
import Hero from "@/app/(demos)/layout-3/components/Hero";
import Newsletter from "@/components/Newsletter";
import Contact from "@/app/contact/page";
import Navigation from "@/components/Navigation";
import PartnerSection from "@/components/partnersection";
import Services from "@/components/services";
import Aboutpage from "@/components/about";
import Blogpage from "@/components/blog";

const page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Newsletter />
      <Aboutpage />
      <Blogpage  />
      <PartnerSection />
      <Contact />
    </>
  );
};

export default page;
