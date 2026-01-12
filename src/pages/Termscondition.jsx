import {Link} from "react-router-dom"

const Termscondition = () => {
  return (
    <>
     <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-350 mx-auto flex justify-between items-center p-4">
          
          {/* LOGO */}
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
    <div className='bg-blue-100 py-10'>
      <section className="px-10 py-10 shadow-2xl rounded-lg bg-white md:mx-40">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-2xl font-bold text-center sm:text-3xl lg:text-4xl mb-4">
              TERMS & CONDITIONS
            </h1>
            <p className="text-gray-700 mb-4">
              We understand the importance of protecting the personal information you provide at Websites owned or controlled by &ldquo;INFOBIRTH INNOVATIONS&rdquo;
            </p>
            <p className="text-gray-700 mb-4">
              CountryRoof is an online listing portal dedicated to the Real estate industry and is owned by InfoBirth Innovations. The &ldquo;privacy policies" and "terms and conditions&rdquo; remains the same for any of the products and services owned by InfoBirth Innovations.
            </p>
            <p className="text-gray-700 mb-4">
              We CountryRoof (hereinafter referred to as &ldquo;Company&rdquo;) provide one stop end-to-end solutions for property investment through various options to our esteem clients. Here the term "Client" refers to a person, irrespective of Gender, Firm, Company, Entity in whose favor a particular property is booked and/ or a credit note is issued. That the terms and condition mentioned hereinafter incorporates this service terms applicable upon our clients and all users of the website 
              <span className='text-[#2D548F]'><a href="https://countryroof.in/"> www.countryRoof.in</a></span>
            </p>
            
            <div className="mt-6 text-xl font-semibold text-gray-800">A. SCOPE OF AGREEMENT</div>
            <p className="text-gray-700 mb-4">1. The Company as a service provider relies on the information pertaining to various projects provided by the respective builders/developers...</p>
            <p className="text-gray-700 mb-4">2. The customer is advised to regularly visit the website of the Company and/ or respective builders/developers...</p>
            <p className="text-gray-700 mb-4">3. The client is bound to notify the Company in case he transfers the unit booked by him/her or creates any third party interest...</p>
            <p className="text-gray-700 mb-4">4. The Company in the capacity of service provider is not responsible for any delays...</p>
            <p className="text-gray-700 mb-4">5. The Company as a service provider is not a part of the business of a Builder/Developer...</p>
            <p className="text-gray-700 mb-4">6. In case the Company has issued a credit note and subsequently it does not receive the commission due from the concerned developer...</p>
            <p className="text-gray-700 mb-4">7. The Company clarifies that it shall not be responsible for interest if any, on the overdue payments...</p>
            <p className="text-gray-700 mb-4">8. The company further clarifies that It shall be the responsibility of the client...</p>
            <p className="text-gray-700 mb-4">9. The Company shall not be responsible for any verbal commitments allegedly made by any employee...</p>
            <p className="text-gray-700 mb-4">10. The Client shall have no objection if the Company uses any data pertaining to his booking for any advertising...</p>
            <p className="text-gray-700 mb-4">11. The Company may suspend the functionality of the website due to reasons of maintenance...</p>
            <p className="text-gray-700 mb-4">12. In case of any query, clarification, grievance the client is free to contact us...</p>
            <p className="text-gray-700 mb-4">13. The Company does not accept any cash from any client under any circumstances...</p>

            <div className="mt-6 text-xl font-semibold text-gray-800">B. COLLECTION OF PERSONAL AND OTHER INFORMATION</div>
            <p className="text-gray-700 mb-4">1. The User expressly agrees and acknowledges that the Company collects and stores the User&rsquo;s personal information...</p>
            <p className="text-gray-700 mb-4">2. The User is aware that the Company/Website may automatically track certain information about the User...</p>
            <p className="text-gray-700 mb-4">3. If the User chooses to post messages / reviews / feedback anywhere on the Website...</p>
            <p className="text-gray-700 mb-4">4. The User is aware that any and all information pertaining to the User collected by the Company...</p>
            <p className="text-gray-700 mb-4">5. The User is aware that while he/she can browse some sections of the Website without being a registered user...</p>
            <p className="text-gray-700 mb-4">6. The User is aware that the Company/Website may occasionally request the User to complete optional online surveys...</p>
            <p className="text-gray-700 mb-4">7. The User is further aware that the Company/Website may occasionally request the User to write reviews for products/services...</p>
            <p className="text-gray-700 mb-4">8. Nothing contained herein shall be deemed to compel the Website/Company to store, upload, publish, or display in any manner content/reviews...</p>

            <div className="mt-6 text-xl font-semibold text-gray-800">C. COOKIES</div>
            <p className="text-gray-700 mb-4">a) The User is aware that a &lsquo;Cookie&rsquo; is a small piece of information stored by a web server on a web browser...</p>
            <p className="text-gray-700 mb-4">b) The User is further aware that the Website uses data collection devices such as cookies on certain pages...</p>

            <div className="mt-6 text-xl font-semibold text-gray-800">D. SHARING OF PERSONAL INFORMATION</div>
            <p className="text-gray-700 mb-4">a) The User is aware that the Website/Company may share the User's personal information with other corporate entities...</p>
            <p className="text-gray-700 mb-4">b) The User is aware that the Website/Company may disclose personal information if required to do so by law...</p>

            <div className="mt-6 text-xl font-semibold text-gray-800">E. USER&rsquo;S CONSENT</div>
            <p className="text-gray-700 mb-4">By using the Website and/ or by providing information to the Company through the Website, the User consents to the collection and use...</p>

            <div className="mt-6 text-xl font-semibold text-gray-800">F. COPYRIGHT AND TRADEMARK POLICY</div>
            <p className="text-gray-700 mb-4">All content included in our Services, such as text, graphics, logos, button icons, images, and clips...</p>
          </div>
        </div>
      </div>
    </section>
    </div>   
    </>
  )
}

export default Termscondition
