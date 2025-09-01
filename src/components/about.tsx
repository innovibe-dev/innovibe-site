import Image from "next/image";
import React from "react";
import iphone from "@/assets/images/feature-iphone.png";
import Navigation from "@/components/Navigation";
import ProcessFlow from "@/components/processflow";


const Aboutpage = () => {
  return (
    <>
      <Navigation />
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <div className="lg:ms-5 ms-8">
              <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
                About EVenues Mobility
              </h2>
              <p className="text-base font-normal text-muted mt-6">
                EVenues Mobility, headquartered in Visakhapatnam, Andhra
                Pradesh, is a pioneering force in India's electric vehicle
                industry. Founded by Sri Hari Kolusu, we deliver cutting-edge EV
                solutions, from sales and services to charging infrastructure
                and fleet management. Our commitment to sustainability drives us
                to promote greener mobility nationwide. With plans for regional
                branches in every state capital and 100 franchises per state
                within three years, we aim to revolutionize transportation.
                Trust EVenues Mobility to lead the charge toward a sustainable
                future with innovative, customer-focused solutions.
              </p>
               <ProcessFlow />
            </div>
            <div className="flex items-center">
              <Image
                src={iphone}
                className="h-[600px] rounded-xl mx-auto"
                alt="feature-image"
                width={538}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;
