import { useState } from "react";
import "./style.css"

const steps = [  
  "Basic Details",
  "Properties Details",
  "Location",
  "Specifications",
  "Pricing",
  "Amenities",
  "Media",
  "Description",
 
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
    area: "",
    bhk: "",
    bathrooms: "",
    price: "",
    amenities: [],
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl my-5">
      
      {/* Progress */}
      <div className="flex justify-between mb-8">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`text-sm font-medium ${
              i === step ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400"
            }`}
          >
            {s}
          </div>
        ))}
      </div>
       
    {/* STEP CONTENT */}
    {step === 0 && (
        <div className="space-y-6 mb-8">
            <div>
                <label htmlFor="status" className="block text-lg font-semibold text-gray-700 mb-3">Who are you?</label>
                <select 
                    name="status" 
                    id="status" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-800 transition" 
                    onChange={handleChange}
                >
                    <option value="">Select your role</option>
                    <option>Owner</option>
                    <option>Builder</option>
                    <option>Broker</option>
                </select>
            </div>
            
            <div>
                <label htmlFor="your-name" className="block text-lg font-semibold text-gray-700 mb-3">Your Name</label>
                <input 
                    name="name" 
                    id="your-name" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                    onChange={handleChange} 
                />
            </div>
            
            <div>
                <label htmlFor="your-phone" className="block text-lg font-semibold text-gray-700 mb-3">Phone Number</label>
                <input 
                    id="your-phone" 
                    name="phone" 
                    placeholder="Enter your phone number" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                    onChange={handleChange} 
                />
            </div>
            
            <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">Email Address</label>
                <input 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                    onChange={handleChange} 
                />
            </div>
        </div>
    )}

    {step === 1 && (
        <div className="space-y-6 mb-8">
            <div>
                <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-3">Property Title</label>
                <input
                    name="title"
                    id="title"
                    placeholder="Enter property title"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div>
                <label htmlFor="propertytype" className="block text-lg font-semibold text-gray-700 mb-3">Property Type</label>
                <select 
                    name="propertyType" 
                    id="propertytype" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-800 transition" 
                    onChange={handleChange}
                >
                    <option value="">Select property type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Plot</option>
                </select>
            </div>
            
            <div>
                <label htmlFor="listingtype" className="block text-lg font-semibold text-gray-700 mb-3">Listing Type</label>
                <select 
                    name="listingType" 
                    id="listingtype" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-800 transition" 
                    onChange={handleChange}
                >
            <option value="">All Types</option>
            <option value="flat">Flat/Apartment</option>
            <option value="house">House</option>
            <option value="commercial">Commercial</option>
            <option value="land">Land</option>
            <option value="Plot">Plot</option>
                </select>
            </div>
        </div>
    )}

    {step === 2 && (
        <div className="space-y-6 mb-8">
            <input 
                name="city" 
                placeholder="City" 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                onChange={handleChange} 
            />
            <input 
                name="locality" 
                placeholder="Locality" 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                onChange={handleChange} 
            />
            <input 
                name="address" 
                placeholder="Full Address" 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                onChange={handleChange} 
            />
        </div>
    )}

    {step === 3 && (
        <div className="space-y-6 mb-8">
            <input 
                name="area" 
                placeholder="Area (sq ft)" 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                onChange={handleChange} 
            />
            <input 
                name="bhk" 
                placeholder="BHK" 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                onChange={handleChange} 
            />
            <input 
                name="bathrooms" 
                placeholder="Bathrooms" 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                onChange={handleChange} 
            />
        </div>
    )}

    {step === 4 && (
        <div className="mb-8">
            <input 
                name="price" 
                placeholder="Price" 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                onChange={handleChange} 
            />
        </div>
    )}

    {step === 5 && (
        <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-4">Select Amenities</label>
            <div className="grid grid-cols-2 gap-4">
                {["Lift", "Parking", "Pool", "Gym", "Security"].map((a) => (
                    <label key={a} className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition">
                        <input 
                            type="checkbox" 
                            onChange={() => handleAmenity(a)}
                            className="w-5 h-5 cursor-pointer"
                        />
                        <span className="text-gray-700 font-medium">{a}</span>
                    </label>
                ))}
            </div>
        </div>
    )}

    {step === 6 && (
        <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-4">Upload Images</label>
            <input 
                type="file" 
                multiple 
                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition cursor-pointer" 
            />
        </div>
    )}

    {step === 7 && (
        <div className="mb-8">
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-3">Property Description</label>
            <textarea 
                id="description" 
                name="description" 
                placeholder="Enter property description" 
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition" 
                onChange={handleChange}
            />
        </div>
    )}
      <div className="flex gap-4 mt-8">
        <button
          onClick={prevStep}
          className="px-6 py-2 cursor-pointer nav-link"
        >
          Back
        </button>

        {step === steps.length - 1 ? (
          <button className="px-6 py-2 bg-[#2D548F] cursor-pointer text-white rounded-lg">
            Submit Property
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="cursor-pointer nav-link px-6 py-2"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
