import React from "react";

const PartnerSection = () => {
  return (
    <section className="bg-blue-600 text-white rounded-2xl p-10 text-center max-w-5xl mx-auto my-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Partner with India&apos;s EV Revolution
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-blue-100">
        Join EVenues as a franchise partner or investor. Be part of India&apos;s
        largest electric vehicle service ecosystem with proven business
        models and comprehensive support.
      </p>

      {/* Contact Emails */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:contact@evenuesmobility.com"
          className="bg-blue-500 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2 border border-blue-400"
        >
          <span className="h-2 w-2 bg-white rounded-full"></span>
          customercare@innovibemobility.com
        </a>
        <a
          href="mailto:ceo@evenuesmobility.com"
          className="bg-blue-500 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2 border border-blue-400"
        >
          <span className="h-2 w-2 bg-white rounded-full"></span>
          ceo@evenuesmobility.com
        </a>
      </div>
    </section>
  );
};

export default PartnerSection;
