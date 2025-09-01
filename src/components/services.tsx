import React from "react";
import Navigation from "@/components/Navigation";
import Otherservices from "./otherservicecard";
const Services = () => {
  return (
    <>
      <Navigation />
      <section id="services" className="py-20">
        <div className="container">
          <br></br>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl/tight font-semibold text-black mt-4">
              EVenues: Powering India's Electric Future{" "}
            </h2>
          </div>
          <br></br>

          <p className="text-base font-medium mt-4 text-muted text-center">
            Headquartered in Visakhapatnam, Andhra Pradesh, EVenues Mobility
            <br />
            Everywhere is India's fastest-growing electric vehicle service
            network.
          </p>
          <br />
        </div>
         <div className="container mt-16">
          <Otherservices />

         
        </div>
      </section>
    </>
  );
};

export default Services;
