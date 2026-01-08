import React from "react";

const SearchBox = () => {
  return (
    <section className="max-w-350 mx-auto px-6 relative -mt-10 z-20">
      <div className="bg-white shadow-lg p-6 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">

        {/* CITY */}
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-gray-500 mb-1 uppercase">
            City
          </label>
          <select
            id="city"
            className="p-3 border rounded-md focus:border-blue-500 outline-none"
          >
            <option value="">All Cities</option>
            <option value="gurgaon">Gurgaon</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="Navi Mumbai">Navi Mumbai</option>
            <option value="Thane">Thane</option>
            <option value="Greater Noida">Greater Noida</option>
            <option value="Noida">Noida</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Faridabad">Faridabad</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Jaipur">Jaipur</option>
          </select>
        </div>

        {/* PROPERTY TYPE */}
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-gray-500 mb-1 uppercase">
            Property Type
          </label>
          <select
            id="type"
            className="p-3 border rounded-md focus:border-blue-500 outline-none"
          >
            <option value="">All Types</option>
            <option value="flat">Flat/Apartment</option>
            <option value="house">House</option>
            <option value="commercial">Commercial</option>
            <option value="land">Land</option>
            <option value="Plot">Plot</option>
          </select>
        </div>

        {/* BUDGET */}
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-gray-500 mb-1 uppercase">
            Budget Range
          </label>
          <select
            id="budget"
            className="p-3 border rounded-md focus:border-blue-500 outline-none"
          >
            <option value="">All Prices</option>
            <option value="0-50">Up to 50 Lakhs</option>
            <option value="50-100">50L - 1Cr</option>
            <option value="100-200">1Cr - 2Cr</option>
            <option value="200-300">2Cr - 3Cr</option>
            <option value="300-400">3Cr - 4Cr</option>
            <option value="400+">Above 4 Crores</option>
          </select>
        </div>

        {/* LOCATION / SOCIETY NAME */}
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-gray-500 mb-1 uppercase">
            Society Names
          </label>
          <input
            id="location"
            type="text"
            placeholder="e.g. Sector 52, Noida"
            className="p-3 border rounded-md focus:border-blue-500 outline-none"
          />
        </div>

        {/* SEARCH BUTTON */}
        <div className="flex items-end">
          <button className="w-full bg-[#1a4d5c] text-white py-3 rounded-md text-sm font-semibold hover:bg-[#143945] transition">
            Search Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
