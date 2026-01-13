import {Link} from "react-router-dom"

const Devloper = () => {
   const properties = [
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'DLF City Phase 2',
      location: 'Gurugram, Haryana',
      priceRange: '₹3.57 Cr - ₹4.72 Cr',
      type: 'Independent Floors',
      sectors: 'Sector 25, DLF Phase 2',
      buttonText: 'Explore'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'DLF Imperial Residences',
      location: 'Gurugram, Haryana',
      priceRange: '₹5.39 Cr - ₹7.43 Cr',
      type: 'Independent Floors',
      sectors: 'Sector 24, DLF Phase 1, 2 & 3',
      buttonText: 'Explore'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'DLF The Arbour',
      location: 'Gurugram, Haryana',
      priceRange: '₹8.49 Cr - ₹10 Cr',
      type: 'Residential Flats',
      sectors: 'Sector 63, Southern Peripheral Road',
      buttonText: 'Explore'
    },
  ];

  return (
   <section>
     <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-350 mx-auto flex justify-between items-center p-4">
    
          <Link to="/">
            <img
              src="https://countryroof.in/upload/logo/1819668946722953.png"
              alt="logo"
              className="w-32"
            />
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-8 font-medium">
            <Link to="/properties">Properties</Link>
           
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-4">
             <Link className="bg-[#2D548F] text-white px-4 py-2 rounded-md text-sm font-semibold" to="/PostProperty">Post Property</Link>
            <button
              className="bg-red-700 opacity-80 text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer"
            >
              <Link to="/Login">
                Login
              </Link>
            </button>
          </div>
        </div>
      </header>

      <section>
       <div class="relative w-full h-ful">

  <img src="https://clubmahindra.gumlet.io/blog/images/Cyber-Structure-Egg-Mumbai-resized.jpg?w=376&dpr=2.6" alt="Developer Image" class="w-full h-90 opacity-80" />

  <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
   <h3 className="absolute top-10 left-1/3 text-[#2D548F] bg-white p-1 rounded text-2xl font-bold">DLF Homes Projects in Gurugram</h3>
   <p className="absolute top-20 left-1/4 text-white text-center">Premium projects crafted with quality, sustainability, and exceptional after‑sales service.</p>
</div>
      <div className="grid grid-cols-[300px_minmax(900px,1fr)_10px]">
        <div className="bg-blue-200 shadow-2xl/20 max-w-md rounded-lg my-10 mx-5 p-5">
          <img src="/" alt="Devloper Logo" className="items-center" />
          <h3 className="text-center text-2xl my-5">
            About 
          </h3>
          <hr />
          <p className="text-center p-5 text-gray-700 font-medium">
            DLF is a well-known real estate developer in India. For more than 70 years, they have built residential projects, apartments, flats, and commercial spaces in big cities like Gurgaon. Their homes are modern and offer luxury living with great amenities like parks, gyms, and swimming pools. DLF focuses on making
          </p>
        </div>
         <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {properties.map((property, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 m-4">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
                <p className="text-gray-600 mt-1">{property.location}</p>
                <p className="text-lg font-semibold text-gray-900 mt-3">{property.priceRange}</p>
                <p className="text-sm text-gray-500 mt-1">{property.type} - {property.sectors}</p>
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-red-600">
                    {property.buttonText}
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-green-600">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
      </section>
   </section>
  )
}

export default Devloper
