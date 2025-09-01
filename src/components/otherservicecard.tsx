import { Battery, Zap, Calendar, Wrench, Repeat, Shield } from 'lucide-react';
import Link from 'next/link';

export default function ElectricVehicleServices() {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50 min-h-screen">
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">EV Services</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Get premium maintenance and repair services for your EV with expert care.
          </p>
        </div>
        </Link>

        {/* Charging Solutions */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Zap className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Charging Solutions</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Find nearby charging stations and access fast-charging support anytime.
          </p>
        </div>

        {/* 24/7 Support */}
        <Link href="/contact">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">24/7 Support</h3>
          <p className="text-gray-600 text-center leading-relaxed">
            We are here to help you resolve the clock with any EV-related issues.
          </p>
          </div>
        </Link>
      </div>
<br />
<br />
      {/* Other Services Section */}
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-12">Other Services</h2>
        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* EV Battery */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Battery className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">EV Battery</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Advanced battery solutions: replacement, upgrades, and smart management.
            </p>
          </div>

          {/* EV Rental */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">EV Rental</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Rent electric bikes and scooters for flexible, eco-friendly mobility.
            </p>
          </div>

          {/* EV Fleet */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Wrench className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">EV Fleet</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Corporate and business fleet management for electric vehicles.
            </p>
          </div>

          {/* EV Charging */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">EV Charging</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Home and public charging stations, plus fast-charging solutions.
            </p>
          </div>

          {/* EV Spares */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Wrench className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">EV Spares</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Genuine spare parts and accessories for all EV models.
            </p>
          </div>

          {/* EV Exchange */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Repeat className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">EV Exchange</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Trade in and upgrade to electric goods and passenger vehicles.
            </p>
          </div>

          {/* EV Insurance & Accidental Claims */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:col-start-2">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">EV Insurance & Accidental Claims</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Comprehensive insurance and hassle-free claim services for your EV.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}