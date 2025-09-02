import React from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Zap, Calendar, Wrench } from "lucide-react";
const Services = () => {
  return (
    <>
      <Navigation />
      <section id="services" className="py-10">
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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-12">
              Complete Electric Vehicle Ecosystem
            </h1>
          </div>

          {/* Top Row Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* EV Services */}
            <Link href="/ev-services">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  EV Services
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Get premium maintenance and repair services for your EV with
                  expert care.
                </p>
              </div>
            </Link>

            {/* Charging Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Charging Solutions
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Find nearby charging stations and access fast-charging support
                anytime.
              </p>
            </div>

            {/* 24/7 Support */}
            <Link href="/contact">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  24/7 Support
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We are here to help you around the clock with any EV-related
                  issues.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
