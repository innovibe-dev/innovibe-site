import React from "react";
import {
  CheckCircle,
  Target,
  Eye,
  Heart,
  Zap,
  Headphones,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import iphone from "@/assets/images/feature-iphone.png";
import ProcessFlow from "./processflow";
import Navigation from "@/components/Navigation";

const Aboutpage = () => {
  return (
    <>
      <Navigation />
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-12 relative">
            {/* Left Side - Text Content */}

            <div className="order-2 lg:order-1">
              <br />
              <br />
              <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                About <span>EVenues Mobility</span>
              </h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed ">
                <p className="text-xl text-gray-700 font-medium">
                  EVenues Mobility, headquartered in{" "}
                  <span className="text-blue-600 font-semibold">
                    Visakhapatnam, Andhra Pradesh
                  </span>
                  , is a pioneering force in India&apos;s electric vehicle
                  industry.
                </p>
                <p>
                  Founded by{" "}
                  <span className="text-emerald-600 font-semibold">
                    Sri Hari Kolusu
                  </span>{" "}
                  in 2011, we deliver cutting-edge EV solutions, from sales and
                  services to charging infrastructure and fleet management. Our
                  commitment to sustainability drives us to promote greener
                  mobility nationwide.
                </p>
                <p>
                  With plans for regional branches in every state capital and{" "}
                  <span className="text-purple-600 font-semibold">
                    100 franchises per state
                  </span>{" "}
                  within three years, we aim to revolutionize transportation
                  across India.
                </p>
                <p className="text-lg font-medium text-gray-800">
                  Trust EVenues Mobility to lead the charge toward a sustainable
                  future with innovative, customer-focused solutions.
                </p>
                {/* Process Flow section moved here as requested */}
                <div className="px-4 sm:px-6 lg:px-8">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8"></div>
                    <br />
                    <ProcessFlow />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-start mt-[-200px]">
              <Image
                src={iphone}
                className="h-[600px] rounded-xl"
                alt="feature-image"
                width={580}
                height={580}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver sustainable and innovative electric vehicle
                solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We strive to build the best educational services and
                eco-friendly technology.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be India&apos;s leading provider of electric vehicle
                technology.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We strive to foster a greener, sustainable future through
                innovative mobility solutions.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Values</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Customer Focus: Prioritizing customer needs and service
                excellence.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Innovation & Sustainability: Driving cutting-edge technology for
                a greener tomorrow.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Integrity & Excellence: Delivering honesty and excellence in all
                we do.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* Why Choose Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Choose EVenues Mobility?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Benefit from our extensive expertise, comprehensive services,
                and commitment to sustainability in the EV sector.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    10+ years of continued industry experience
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Nationwide service network across India
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Certified technicians and quality assurance
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Eco-friendly solutions for sustainable future
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Competitive pricing with flexible payment options
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Services */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Innovative Solutions
              </h3>

              {/* Service Cards */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-3">
                  <Zap className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    Innovative Solutions
                  </h4>
                </div>
                <p className="text-gray-600">
                  We offer the latest technologies to enhance your EV
                  experience.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                <div className="flex items-center mb-3">
                  <Headphones className="w-8 h-8 text-emerald-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    24/7 Support
                  </h4>
                </div>
                <p className="text-gray-600">
                  Our team is here to assist you with any EV-related needs
                  anytime.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center mb-3">
                  <ShoppingCart className="w-8 h-8 text-purple-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    Wide Selection
                  </h4>
                </div>
                <p className="text-gray-600">
                  Choose from a range of electric vehicles to suit your
                  lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;
