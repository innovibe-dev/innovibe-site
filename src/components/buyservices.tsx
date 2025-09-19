import React from "react";
import { CheckCircle, Settings, Users, Zap } from "lucide-react";

const BuyEVServices = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <br />
        <br />
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">EV Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All-around EV maintenance, repair, and home service for two-wheelers
            and bikes.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 2 Wheelers Service */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Zap className="w-16 h-16 mx-auto mb-2" />
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    &#11088; Popular
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2 Wheelers (Bicycle, Scooter &amp; Bikes)
              </h3>
              <p className="text-gray-600 mb-4">
                Choose your ideal 2-wheeler from our collection.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-sm">Ideal for city commutes</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-sm">Various models available</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-sm">Expert support provided</span>
                </div>
              </div>

              <a href="/bookservice" className="block w-full">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          {/* Roadside Assistance */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <Settings className="w-16 h-16 mx-auto mb-2" />
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    &#11088; Popular
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Roadside Assistance (RSA)
              </h3>
              <p className="text-gray-600 mb-4">
                Get help anytime, anywhere on the road.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-sm">Instant help on the go</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-sm">Coverage across regions</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-sm">
                    Professional technicians ready
                  </span>
                </div>
              </div>

              <a href="/bookservice" className="block w-full">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          {/* Home Service */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Users className="w-16 h-16 mx-auto mb-2" />
                  <div className="bg-white text-teal-600 px-2 py-1 rounded text-xs font-bold">
                    EVGO
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Home Service &amp; Maintenance
              </h3>
              <p className="text-gray-600 mb-4">
                Professional EV maintenance at your doorstep.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-sm">Doorstep service available</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-sm">Certified technicians</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-sm">Genuine parts guaranteed</span>
                </div>
              </div>

              <a href="/bookservice" className="block w-full">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyEVServices;
