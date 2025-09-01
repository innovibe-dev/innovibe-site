import React from 'react'
import home from "@/assets/images/home/parallax.png";
import Link from 'next/dist/client/link';

const Newsletter = () => {
  return (

    <section
    className="relative py-20 bg-cover bg-no-repeat bg-center bg-fixed"
    style={{ backgroundImage: `url(${home.src})` }}
    data-jarallax
    data-speed="0.20"
  >
    <div className="absolute inset-0 w-full h-full bg-gray-900/70" />
    <div className="container">
      <div className="pb-10 lg:pb-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl/tight font-semibold text-white text-center">
         Drive the Future with Smarter EV Solutions
        </h1>
        <p className="text-base font-normal max-w-xl text-center mx-auto text-white mt-6">
         From charging solutions to expert maintenance, we make your EV experience seamless and stress-free.
        </p>
        <div className="flex flex-wrap mt-6 gap-3">
          
          <Link href="/ev-services" className="py-2 px-6 rounded-md text-white text-base bg-primary hover:bg-primaryDark border border-primary hover:border-primaryDark transition-all duration-500 font-medium">
            Book a Service
          </Link>
        </div>
      </div>
    </div>
  </section>  
  )
}

export default Newsletter