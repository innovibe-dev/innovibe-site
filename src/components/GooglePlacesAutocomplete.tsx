"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface Address {
  formattedAddress?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  latitude?: number;
  longitude?: number;
}

interface Props {
  apiKey: string;
  inputPlaceholder?: string;
  defaultValue?: string;
  onSelect: (address: Address | null) => void;
  className?: string;
  inputClassName?: string;
}

export default function GooglePlacesAutocomplete({
  apiKey,
  inputPlaceholder = "Enter address",
  defaultValue = "",
  onSelect,
  className,
  inputClassName,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.onload = initAutocomplete;
      document.body.appendChild(script);
    } else {
      initAutocomplete();
    }
  }, []);

  const initAutocomplete = () => {
    if (!inputRef.current || !window.google) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      { types: ["address"] }
    );

    // ⚡ Add this to get full address components
    autocomplete.setFields(["address_components", "geometry", "formatted_address"]);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) {
        onSelect(null);
        return;
      }

      const address: Address = {
        formattedAddress: place.formatted_address,
        latitude: place.geometry.location?.lat(),
        longitude: place.geometry.location?.lng(),
      };

      place.address_components?.forEach((comp) => {
        const types = comp.types;
        if (types.includes("locality")) address.city = comp.long_name;
        if (types.includes("administrative_area_level_1")) address.state = comp.long_name;
        if (types.includes("country")) address.country = comp.long_name;
        if (types.includes("postal_code")) address.zip = comp.long_name;
      });

      setValue(address.formattedAddress || "");
      onSelect(address);
    });
  };

  const clearInput = () => {
    setValue("");
    if (inputRef.current) inputRef.current.value = "";
    onSelect(null);
  };

  return (
    <div className={`relative ${className || ""}`}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={inputPlaceholder}
        className={`${inputClassName || ""} pr-10`}
      />
      {value && (
        <button
          type="button"
          onClick={clearInput}
          className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
