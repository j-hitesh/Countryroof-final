import React, { useState } from "react";

const propertyData = [
  {
    id: 1,
    type: "buy",
    tag: "Featured",
    title: "Luxury 3 BHK in Sector 52",
    price: "₹1.85 Cr",
    location: "Gurgaon, Haryana",
    img: "https://luxuryontario.ca/wp-content/uploads/2021/02/Exterior-of-334-Balsam-Drive-Georgian-style-Oakville-real-estate-1600x1067.jpg",
  },
  {
    id: 2,
    type: "rent",
    tag: "New",
    title: "Modern 2 BHK in DLF Phase 3",
    price: "₹45,000 / Month",
    location: "Gurgaon, Haryana",
    img: "https://tse2.mm.bing.net/th/id/OIP.aY6Sb2oNmNYoiQkKzEem7wHaE7",
  },
  {
    id: 3,
    type: "buy",
    tag: "Verified",
    title: "Premium 4 BHK Villa",
    price: "₹3.2 Cr",
    location: "Bangalore, Karnataka",
    img: "https://mchi.net/wp-content/uploads/2024/11/real-estate-bhiwadi1.webp",
  },
  {
    id: 4,
    type: "rent",
    tag: "Hot",
    title: "Office Space in DLF Cyber Hub",
    price: "₹80 / SqFt / Month",
    location: "Gurgaon, Haryana",
    img: null,
  },
  {
    id: 5,
    type: "buy",
    tag: "",
    title: "Spacious 2 BHK in Safdarjung",
    price: "₹2.1 Cr",
    location: "Delhi, NCR",
    img: null,
  },
  {
    id: 6,
    type: "rent",
    tag: "",
    title: "Cozy 1 BHK in Powai",
    price: "₹65,000 / Month",
    location: "Mumbai, Maharashtra",
    img: null,
  },
];

const FeaturedProperties = () => {
  const [filter, setFilter] = useState("all");
  const [compare, setCompare] = useState([]);

  const filtered =
    filter === "all"
      ? propertyData
      : propertyData.filter((p) => p.type === filter);

  const toggleCompare = (id) => {
    setCompare((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
          <p className="text-gray-600">
            Browse verified properties • Zero brokerage • Transparent pricing
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {["all", "buy", "rent"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-md text-sm font-semibold ${
                filter === t
                  ? "bg-[#1a4d5c] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {t === "all" ? "All Properties" : t === "buy" ? "Buy" : "Rent"}
            </button>
          ))}
        </div>

        {/* PROPERTY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="rounded-xl shadow-md hover:shadow-xl transition overflow-hidden bg-white"
            >
              {/* IMAGE */}
              <div className="relative h-[160px] bg-gray-200 flex items-center justify-center">
                {p.img ? (
                  <img
                    src={p.img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                ) : (
                  <span className="text-white font-bold text-sm">
                    {p.title}
                  </span>
                )}

                {p.tag && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded">
                    {p.tag}
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <p className="text-xs uppercase text-gray-500 font-semibold mb-1">
                  {p.type === "buy" ? "Buy Property" : "Rent Property"}
                </p>

                <h3 className="font-bold text-lg">{p.title}</h3>

                <p className="text-[#1a4d5c] font-bold mt-1">{p.price}</p>
                <p className="text-sm text-gray-600 mt-2">📍 {p.location}</p>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col gap-2 mt-4">
                  <button className="bg-[#1a4d5c] text-white py-2 rounded-md text-sm font-semibold">
                    Send Inquiry
                  </button>

                  <button
                    onClick={() => toggleCompare(p.id)}
                    className={`py-2 rounded-md text-sm font-semibold ${
                      compare.includes(p.id)
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {compare.includes(p.id)
                      ? "Remove from Compare"
                      : "Compare"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARE BAR */}
        {compare.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-[#1a4d5c] text-white px-6 py-3 rounded-lg shadow-lg z-50">
            <p className="text-sm font-semibold mb-1 pointer-cursor">
              Compared Properties: {compare.length}
            </p>
            <button className="underline text-sm">Compare Now</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
