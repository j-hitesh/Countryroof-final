import React from 'react'

const About = () => {
  return (
    <section>
        <div style={{
            backgroundImage: "url('https://airfixture.com/hubfs/Imported_Blog_Media/Designing-a-high-rise-building-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
             <h3 className='text-6xl font-semibold text-center'>Trusted Real Estate Experts</h3>
             <h3 className='text-4xl font-semibold text-center text-[#2D548F]'>Since 2000</h3>
             <p className='text-white text-lg text-center'>Since 2000, we've been helping people find their dream homes, offices, and the right investments in property across Gurgaon and Delhi NCR.</p>
        </div>
        <div className='px-20'>
           <h2 className="text-center text-2xl font-bold mb-4">About us</h2>
           <p className='text-gray-600 text-base'>
            At Country Roof, we specialize in helping individuals and businesses find their dream properties effortlessly. Established in 2021, we have emerged as a trusted name in the real estate industry, providing a seamless experience for property buyers and sellers.

Our mission is to bridge the gap between buyers and sellers through an innovative real estate platform that ensures transparency, authenticity, and convenience. With a team of dedicated professionals, we assist clients in making informed property investment decisions.

Whether you are looking for a residential home, commercial property, or investment opportunity, we are committed to providing verified property listings, comprehensive market insights, and end-to-end support to simplify your real estate journey.
           </p>

           <h3 className='py-10 text-3xl text-center font-semibold'>
            Our Founder
           </h3>
           <div className='grid grid-cols-2'>
            <p className='text-gray-600 text-base'>
                Mr. Dharampal Chaudhary is a renowned entrepreneur who has excelled in various fields, including real estate development, politics, education, and social work. He is the founder of Country Roof and the chairman of Rite Group, which has established itself as a leading real estate company under his visionary leadership. Through Rite Group, Mr. Chaudhary has developed high-quality residential and commercial spaces catering to clients' diverse needs. He has also established Rite Real Estate Pvt. Ltd. to provide value-based solutions to clients in various fields.

Mr. Chaudhary's passion for preserving and promoting Indian culture is evident through establishing Rite Hospitality Pvt. Ltd., an e-commerce food delivery company that offers authentic Indian delicacies. This venture showcases his willingness to explore new opportunities while promoting Indian culture.

In addition to his successful real estate and hospitality ventures, Mr. Chaudhary is dedicated to social reform through education and empowerment. As the founder trustee of Rite Group, he has facilitated the creation of innovative educational programs and services that have positively impacted individuals and organizations.

Mr. Dharampal Chaudhary's visionary leadership, commitment to social reform, and diverse business ventures make him an inspiring entrepreneur and real estate developer.
            </p>
            <img src="/" alt="yha image hai" />
           </div>
           <h3 className='text-2xl mt-8 font-semibold'>Property Listings</h3>
           <p className='text-gray-600 text-base'>We offer an extensive range of verified property listings across prime locations, ensuring you find the best property options suited to your needs.</p>
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
        <div>
            <h3 className='text-2xl font-semibold my-5 text-center'>Our operating principles</h3>   
            <p className='text-gray-600 text-base text-center mb-5'>These core values guide everything we do and ensure exceptional service for our clients.</p>
            <div className='grid grid-cols-3 gap-24'>
               <div className='bg-white shadow-2xl/25 w-90 h-60 p-10 rounded-xl'>
                <h3 className='text-2xl font-semibold text-center'>No Problem is Too Hard</h3>
                <p className='text-gray-600 text-base text-center mt-10'>We tackle every real estate challenge with determination and innovative solutions.</p>
               </div>
               <div className='bg-white shadow-2xl/25 w-90 h-60 p-10 rounded-xl'>
                <h3 className='text-2xl font-semibold text-center'>People First</h3>
                <p className='text-gray-600 text-base text-center mt-10'>Our clients' dreams and aspirations are at the heart of everything we do.</p>
               </div>
               <div className='bg-white shadow-2xl/25 w-90 h-60 p-10 rounded-xl'>
                <h3 className='text-2xl font-semibold text-center'>Transparency Always</h3>
                <p className='text-gray-600 text-base text-center mt-10'>Complete honesty in every transaction, with no hidden costs or surprises.</p>
               </div>
            </div>
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
