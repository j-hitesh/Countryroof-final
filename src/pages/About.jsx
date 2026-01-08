import React from 'react'

const About = () => {
  return (
    <section>
        <div className='px-20'>
           <h2 className="text-center text-2xl font-bold mb-4">About us</h2>
           <p className='text-sm font-normal'>
            At Country Roof, we specialize in helping individuals and businesses find their dream properties effortlessly. Established in 2021, we have emerged as a trusted name in the real estate industry, providing a seamless experience for property buyers and sellers.

Our mission is to bridge the gap between buyers and sellers through an innovative real estate platform that ensures transparency, authenticity, and convenience. With a team of dedicated professionals, we assist clients in making informed property investment decisions.

Whether you are looking for a residential home, commercial property, or investment opportunity, we are committed to providing verified property listings, comprehensive market insights, and end-to-end support to simplify your real estate journey.
           </p>
           <h3 className='text-2xl mt-8 font-semibold'>Property Listings</h3>
           <p>We offer an extensive range of verified property listings across prime locations, ensuring you find the best property options suited to your needs.</p>
           <h3 className='text-2xl my-5 font-semibold'>Available Locations:</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 rounded'
        style={{
            backgroundImage: "url('https://airfixture.com/hubfs/Imported_Blog_Media/Designing-a-high-rise-building-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            {['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Jaipur'].map((city) => (
                <div key={city} className=' bg-white/30 p-4 border border-gray-300 rounded-lg hover:shadow-lg cursor-pointer text-center'>
                    <p className='font-semibold text-black'>{city}</p>
                </div>
            ))}
        </div>
        <h3 className='text-2xl font-semibold my-5'>Our Services</h3>
        <ul className='px-5 list-disc'>
            <li>Property Search – Get access to a wide range of real estate listings in prime locations.</li>
            <li>Property Viewing – Schedule in-person or virtual property tours with expert insights.</li>
            <li>Legal & Financial Assistance – We provide end-to-end support in documentation, financing, and legal formalities.</li>
            <li>Property Registration & Ownership Transfer – We handle all the paperwork to secure your investment hassle-free.</li>
        </ul>

        <h3 className='text-2xl font-semibold my-5'> Why Choose Us?</h3>
        <ul className='mb-10'> 
            <li>✔ Verified Listings – 100% authentic properties with complete documentation.</li>
            <li>✔ Expert Consultation – Market insights from experienced professionals.</li>
            <li>✔ End-to-End Support – From search to ownership, we assist at every step.</li>
        </ul>
        </div>
    </section>
  )
}

export default About
