import React from "react";

const PropertyDetailsInfo = () => {
  return (
    <section className="bg-white rounded-xl shadow-md mt-6">
      {/* PRICE ROW */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 border-b">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            ₹1.62 Cr – 2.27 Cr{" "}
            <span className="text-sm font-normal text-gray-500">+ Charges</span>
          </h2>
          <p className="text-gray-600 mt-1">₹13,990 Per Sq. Ft</p>
        </div>

        <button className="flex items-center gap-2 border border-yellow-400 text-yellow-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-50">
          📈 Price Insights
        </button>
      </div>

      {/* INFO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-b">
        {/* Project Status */}
        <div className="flex gap-4 items-start">
          <div className="text-2xl">🏗️</div>
          <div>
            <p className="text-sm text-gray-500">Project Status</p>
            <p className="font-semibold text-gray-800">
              Partially Ready To Move
            </p>
          </div>
        </div>

        {/* Possession */}
        <div className="flex gap-4 items-start justify-between">
          <div className="flex gap-4">
            <div className="text-2xl">📅</div>
            <div>
              <p className="text-sm text-gray-500">Possession Starting From</p>
              <p className="font-semibold text-gray-800">Apr 2027</p>
            </div>
          </div>

          <button className="border border-yellow-400 text-yellow-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-50">
            RERA Updates
          </button>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {/* Unit Config */}
        <div className="flex gap-3">
          <div className="text-xl">🏢</div>
          <div>
            <p className="text-sm text-gray-500">Unit Config</p>
            <p className="font-semibold">2, 3 BHK Ind Floor</p>
          </div>
        </div>

        {/* Size */}
        <div className="flex gap-3">
          <div className="text-xl">📐</div>
          <div>
            <p className="text-sm text-gray-500">Size</p>
            <p className="font-semibold">
              1158 to 1620 Sq. Ft
            </p>
          </div>
        </div>

        {/* Units */}
        <div className="flex gap-3">
          <div className="text-xl">🏘️</div>
          <div>
            <p className="text-sm text-gray-500">Number of Units</p>
            <p className="font-semibold">1622</p>
          </div>
        </div>

        {/* Area */}
        <div className="flex gap-3">
          <div className="text-xl">🌳</div>
          <div>
            <p className="text-sm text-gray-500">Total Area</p>
            <p className="font-semibold">52.27 Acres</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsInfo;
