"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import GooglePlacesAutocomplete from "@/components/GooglePlacesAutocomplete";

export default function BookingForm() {
  // const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    vehicle: "",
    vehicleNumber: "",
    description: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Booking data:", form); // <-- This prints the form data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Service booked successfully! We will contact you soon.");

      setForm({
        name: "",
        email: "",
        mobile: "",
        vehicle: "",
        vehicleNumber: "",
        description: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        latitude: "",
        longitude: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to book service. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="pb-16" style={{ paddingTop: "120px" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl/tight font-semibold text-gray-900 mb-4">
              Book Your EV Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to schedule your electric vehicle service.
              Our expert technicians will get in touch with you shortly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6"
          >
            {/* Name, Email, Mobile, Vehicle fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="+91 98765 43210"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Vehicle Brand & Model <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="e.g., Tata Nexon EV"
                />
              </div>
            </div>

            {/* Vehicle Number */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Vehicle Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="vehicleNumber"
                value={form.vehicleNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="e.g., KA01AB1234"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Service Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                rows={4}
                value={form.description}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Please describe the service you need..."
              />
            </div>

            {/* Address Input without background card */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>

              <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
                inputPlaceholder="Enter your address"
                defaultValue={form.address}
                onSelect={(address) => {
                  if (address) {
                    setForm((prev) => ({
                      ...prev,
                      address: address.formattedAddress || "",
                      city: address.city || "",
                      state: address.state || "",
                      country: address.country || "",
                      zipcode: address.zip || "",
                      latitude: address.latitude?.toString() || "",
                      longitude: address.longitude?.toString() || "",
                    }));
                  } else {
                    setForm((prev) => ({
                      ...prev,
                      address: "",
                      city: "",
                      state: "",
                      country: "",
                      zipcode: "",
                      latitude: "",
                      longitude: "",
                    }));
                  }
                }}
                className="w-full"
                inputClassName="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Processing..." : "Book Service Now"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
