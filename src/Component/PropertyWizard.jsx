import { useState } from "react";
import "./style.css"

const steps = [  
  "Basic Details",
  "Properties Details",
  "Location",
  "Description",
  "Specifications",
  "Pricing",
  "Amenities",
  "Media",
];

export default function PropertyWizard() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    title: "",
    propertyType: "",
    listingType: "",
    status: "",
    city: "",
    locality: "",
    address: "",
    Garaze:"",
    Lift: "",
    area: "",
    bhk: "",
    bathrooms: "",
    price: "",
    amenities: [],
    specification: [],
    images: [],
    description: "",
    name: "",
    phone: "",
    email: "",
  });

  const nextStep = () => step < steps.length - 1 && setStep(step + 1);
  const prevStep = () => step > 0 && setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAmenity = (value) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.includes(value)
        ? formData.amenities.filter((a) => a !== value)
        : [...formData.amenities, value],
    });
  };
  const handleSpecification = (value) => {
    setFormData({
      ...formData,
      specification: formData.specification.includes(value)
        ? formData.specification.filter((a) => a !== value)
        : [...formData.specification, value],
    });
  };


const handleFileChange = (e, fileType) => {
    setFormData({
        ...formData,
        [fileType]: [...(formData[fileType] || []), ...e.target.files],
    });
};

return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-2xl my-5">
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-12">
            {steps.map((s, i) => (
                <div key={i} className="flex items-center">
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition ${
                            i <= step
                                ? "bg-[#2D548F] text-white"
                                : "bg-gray-300 text-gray-600"
                        }`}
                    >
                        {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                        <div
                            className={`h-1 w-16 mx-2 transition ${
                                i < step ? "bg-[#2D548F]" : "bg-gray-300"
                            }`}
                        />
                    )}
                </div>
            ))}
        </div>

        <div className="flex gap-4 mb-6">
            {steps.map((s, i) => (
                <span
                    key={i}
                    className={`text-lg font-medium ${
                        i === step ? "text-[#2D548F]" : "text-gray-400"
                    }`}
                >
                    {s}
                </span>
            ))}
        </div>

        {/* Step Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
            <span className="text-[#2D548F]">{step + 1+"."}</span> {steps[step]}
        </h2>

        {/* STEP CONTENT */}
        {step === 0 && (
            <div className="space-y-6 mb-8">
                <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">Who are you?</label>
                    <select
                        name="status"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-white text-gray-600 transition"
                        onChange={handleChange}
                    >
                        <option value="">Select your role</option>
                        <option>Owner</option>
                        <option>Builder</option>
                        <option>Broker</option>
                    </select>
                </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition"
                            onChange={handleChange}
                        />
                    </div>
                </div>
        )}

        {step === 1 && (
            <div className="space-y-6 mb-8">
                <input name="title" placeholder="Property Title" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition" onChange={handleChange} />
                <select name="propertyType" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red bg-white text-gray-600 transition" onChange={handleChange}>
                    <option>Select property type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Plot</option>
                </select>
                <select name="listingType" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-white text-gray-600 transition" onChange={handleChange}>
                    <option>All Types</option>
                    <option>Flat/Apartment</option>
                    <option>House</option>
                    <option>Commercial</option>
                    <option>Land</option>
                    <option>Plot</option>
                </select>
            </div>
        )}

        {step === 2 && (
            <div className="space-y-4 mb-8">
                <input name="city" placeholder="City" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition" onChange={handleChange} />
                <input name="locality" placeholder="Locality" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition" onChange={handleChange} />
                <input name="address" placeholder="Full Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition" onChange={handleChange} />
            </div>
        )}

{step === 3 && (
    <div className="mb-8">
        <label className="block text-lg font-semibold text-gray-700 mb-3">Property Description</label>
        <textarea name="description" placeholder="Enter property description" rows="6" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" onChange={handleChange} />
    </div>
)}
        {step === 4 && (
            <div className="space-y-4 mb-8">
                <input name="area" placeholder="Area (sq ft)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition" onChange={handleChange} />
                <input name="bhk" placeholder="BHK" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition" onChange={handleChange} />
                <input name="bathrooms" placeholder="Bathrooms" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition" onChange={handleChange} />
                 <div className="grid grid-cols-2 gap-4">
                 {["Garaze", "Lift"].map((a) => (
                        <label key={a} htmlFor="checkbox_specification" className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition">
                            <input name="checkbox_specification" type="checkbox_specification" onChange={() => handleSpecification(a)} className="w-5 h-5 cursor-pointer border" />
                            <span className="text-gray-700 font-medium">{a}</span>
                        </label>
                    ))}

                 </div>
            </div>
        )}

        {step === 5 && (
            <div className="mb-8">
                <div className="mb-5">
                  <label className="text-gray-700 font-medium" htmlFor="sellPrice">Sell Price</label>
                  <input type="text" name="sellPrice" placeholder="Sell Price" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition" onChange={handleChange} />
                </div>
            <div className="mb-8">
                <label className="text-gray-700 font-medium" htmlFor="price">Price</label>
                <input name="price" placeholder="Price" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition" onChange={handleChange} />
            </div>

            </div>
        )}

        {step === 6 && (
            <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-4">Select Amenities</label>
                <div className="grid grid-cols-2 gap-4">
                    {["Lift", "Parking", "Pool", "Gym", "Security"].map((a) => (
                        <label key={a} htmlFor="checkbox" className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition">
                            <input name="checkbox" type="checkbox" onChange={() => handleAmenity(a)} className="w-5 h-5 cursor-pointer" />
                            <span className="text-gray-700 font-medium">{a}</span>
                        </label>
                    ))}
                </div>
            </div>
        )}

        {step === 7 && (
            <div className="mb-8">
                <div className="mb-5">
                   <label className="block text-lg font-semibold text-gray-700 mb-4">Banner Images</label>
                <input type="file" multiple className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition cursor-pointer" />
                </div>
                <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-4">
                        Gallery Images
                    </label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition cursor-pointer"
                        onChange={(e) => handleFileChange(e, "galleryImages")}
                    />
                </div>
            </div>
        )}


        <div className="flex justify-between gap-4 mt-12">
            <button onClick={prevStep} className="px-6 py-3 text-gray-700 font-semibold rounded-lg hover:text-red-500 transition cursor-pointer">
                Back
            </button>
            {step === steps.length - 1 ? (
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg transition cursor-pointer">
                    Submit Property
                </button>
            ) : (
                <button onClick={nextStep} className="px-6 py-3 bg-[#2D548F] text-white font-semibold rounded-lg transition cursor-pointer flex items-center gap-2">
                    Next <span>→</span>
                </button>
            )}
        </div>
    </div>
);
}
