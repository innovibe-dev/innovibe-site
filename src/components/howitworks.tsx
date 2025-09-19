import React from "react";
import IconifyIcon from "@/components/wrappers/IconifyIcon";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900">How It Works</h2>
          <p className="text-gray-600 mt-3">
            Accessing our electric vehicle services is easy. Follow these simple steps to get started!
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              number: "1",
              title: "Choose a Service",
              desc: "Select from our range of services including sales, maintenance, conversion, and charging solutions.",
              icon: "mdi:magnify",
            },
            {
              number: "2",
              title: "Book an Appointment",
              desc: "Schedule your service or consultation at your convenience. Pick a time that works for you.",
              icon: "mdi:calendar-check",
            },
            {
              number: "3",
              title: "Enjoy the Benefits",
              desc: "Experience top-notch EV services and products, with guaranteed satisfaction every time.",
              icon: "mdi:star-outline",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-center relative"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-blue-600 text-white rounded-full mx-auto text-lg font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
              <div className="absolute text-blue-600" style={{ bottom: '0.8rem !important', right: '0.6rem !important',}}>
                <IconifyIcon icon={step.icon} className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Why Our Process Works */}
        <div className="bg-white shadow-md rounded-xl mt-16 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Why Our Process Works</h2>
            <p className="text-gray-600 mt-3">
              Our streamlined approach ensures you get the best EV services with minimal hassle and maximum satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: " 5 min",
                subtitle: "Quick & Easy",
                desc: "Simple 3-step process that takes just minutes to complete.",
              },
              {
                title: "24/7",
                subtitle: "Flexible Scheduling",
                desc: "Book appointments that fit your schedule, including weekends.",
              },
              {
                title: "100%",
                subtitle: "Guaranteed Quality",
                desc: "Professional services delivered with 100% satisfaction guarantee.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-blue-600">
                  {item.title}
                </h3>
                <p className="font-semibold mt-1">{item.subtitle}</p>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
