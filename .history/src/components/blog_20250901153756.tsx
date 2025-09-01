import Image from "next/image";
import React from "react";
import client03 from "@/assets/images/user/client-03.jpg";
import client05 from "@/assets/images/user/client-05.jpg";
import blog5 from "@/assets/images/blog/05.jpg";
import blog7 from "@/assets/images/blog/07.jpg";
import user3 from "@/assets/images/user/client-03.jpg";
import blog4 from "@/assets/images/blog/04.jpg";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const Blogpage = () => {
  return (
    <>
      <Navigation />
      <section id="blog" className="py-20">
        <div className="container">
          <div className="">
            <div className="text-center max-w-xl mx-auto">
              
              <h2 className="text-3xl md:text-4xl/tight font-semibold mt-4">
                EV Insights & Updates
              </h2>
              <br />
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest trends, tips, and insights from India's electric vehicle industry.
            Featured Articles
          </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14 items-center">
            <div className="bg-white rounded-xl border">
              <div className="relative">
                <Image className="rounded-t-xl" src={blog5} alt="" />
              </div>
              <div className="flex py-6 px-6">
                <div>
                  <Link
                    href=""
                    className="text-xl text-black font-semibold line-clamp-2"
                  >
                    Spotlight — Equinox Collection by Shane Griffin
                  </Link>
                  <p className="mt-4 mb-6 text-gray-500 leading-6">
                    As I searched for inspiration to get started, I came across
                    the captivating creations of Shane Griffin, an artist and
                    director located in New York City...
                  </p>
                  <div className="flex items-center justify-between gap-3 mt-4">
                    <div className="flex items-center">
                      <Image
                        src={client05}
                        className="h-10 w-10 me-4 rounded-full"
                        alt=""
                      />
                      <Link
                        href=""
                        className="text-black text-sm font-semibold pb-1 hover:underline hover:text-primary transition-all duration-300"
                      >
                        Credon catla
                      </Link>
                    </div>
                    <p className="flex font-medium text-muted">August 2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border">
              <div className="relative">
                <Image className="rounded-t-xl" src={blog7} alt="" />
              </div>
              <div className="flex py-6 px-6">
                <div>
                  <Link
                    href=""
                    className="text-xl text-black font-semibold line-clamp-2"
                  >
                    Random Explorations with Cinema 4D and Redshift
                  </Link>
                  <p className="mt-4 mb-6 text-gray-500 leading-6">
                    As I searched for inspiration to get started, I came across
                    the captivating creations of Shane Griffin, an artist and
                    director located in New York City...
                  </p>
                  <div className="flex items-center justify-between gap-3 mt-4">
                    <div className="flex items-center">
                      <Image
                        src={client03}
                        className="h-10 w-10 me-4 rounded-full"
                        alt=""
                      />
                      <Link
                        href=""
                        className="text-black text-sm font-semibold pb-1 hover:underline hover:text-primary transition-all duration-300"
                      >
                        Jessica Smith
                      </Link>
                    </div>
                    <p className="flex font-medium text-muted">August 3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border">
              <div className="relative">
                <Image className="rounded-t-xl" src={blog4} alt="" />
              </div>
              <div className="flex py-6 px-6">
                <div>
                  <Link
                    href=""
                    className="text-xl text-black font-semibold line-clamp-2"
                  >
                    Step by step guide for conducting usability
                  </Link>
                  <p className="mt-4 mb-6 text-gray-500 leading-6">
                    As I searched for inspiration to get started, I came across
                    the captivating creations of Shane Griffin, an artist and
                    director located in New York City...
                  </p>
                  <div className="flex items-center justify-between gap-3 mt-4">
                    <div className="flex items-center">
                      <Image
                        src={user3}
                        className="h-10 w-10 me-4 rounded-full"
                        alt=""
                      />
                      <Link
                        href=""
                        className="text-black text-sm font-semibold pb-1 hover:underline hover:text-primary transition-all duration-300"
                      >
                        Petric Camp
                      </Link>
                    </div>
                    <p className="flex font-medium text-muted">August 8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="py-12 px-4">
      <div className="bg-blue-600 text-white rounded-xl max-w-4xl mx-auto p-10 text-center">
        <h2 className="text-2xl font-semibold">Stay Updated with EV Insights</h2>
        <p className="mt-3 text-blue-100">
          Subscribe to our newsletter and get the latest electric vehicle news,
          tips, and insights delivered to your inbox.
        </p>

        {/* Form */}
        <form
          // onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full sm:w-64 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Blogpage;
