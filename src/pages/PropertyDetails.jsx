import { Tag, Building2,
  Dumbbell,
  Film,
  Utensils,
  Gamepad2,
  Armchair,
  Video,
  TreePine,
  Footprints
} from "lucide-react";
import { useState } from "react";
import FloorPlan from "../Component/FloorPlan"
import { Link } from "react-router-dom";

export default function PropertyDetails() {
    const[expanded, setExpanded]=useState("");
    
  const amenitiesIcons = {
    
    };

    return (
    <section>
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

    <div className="max-w-5xl rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white mx-10">

      <div className="relative">
        <img
          src="data:image/jpeg;base64,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"
          alt="Property"
          className="w-full h-90 object-cover"/>
       <div>
        <img src="" alt="" />
        </div> 
      </div>

      <div className="p-5 space-y-4">
        {/* Price Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Tag className="w-5 h-5 text-gray-600" />
            ₹1.00 Cr - 2.98 Cr
            <span className="text-sm font-normal text-gray-500">
              + Charges
            </span>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-yellow-400 text-yellow-600 rounded-lg text-sm font-medium hover:bg-yellow-50">
            Price Insights
          </button>
        </div>

        <hr />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <Building2 className="w-5 h-5 text-gray-600 mt-0.5" />
            <div>
              <p className="text-gray-500">Project Status</p>
              <p className="font-medium">Partially Ready To Move</p>
            </div>
          </div>

          <div>
            <p className="text-gray-500">Possession Starting From</p>
            <p className="font-medium">Dec 2030</p>
          </div>

          <div className="flex items-center md:justify-end">
            <button className="px-4 py-2 border border-yellow-400 text-yellow-600 rounded-lg text-sm font-medium hover:bg-yellow-50">
              RERA Updates
            </button>
          </div>
         
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
            <Building2 className="w-5 h-5 text-gray-600 mt-0.5" />
             <div>
              <p className="text-gray-500">Project Status</p>
              <p className="font-medium">Partially Ready To Move</p>
            </div>

            </div>
             {/* <hr className="rote-90" /> */}
             <div className="flex items-start gap-2">
                <Building2 className="w-5 h-5 text-gray-600 mt-0.5" />
                <div>
                    <p>Size</p>
                    <p>283 to 1397 Sq. Ft</p>
                </div>
             </div>
             <div className="flex items-start gap-2">
                <Building2 className="w-5 h-5 text-gray-600 mt-0.5" />
                <div>
                    <p>Total area</p>
                    <p>2.5 Acres</p>
                </div>
             </div>
        </div >
            
      </div>
    </div>
    <div className="sticky top-0 bg-gray-400 h-15 py-5 space-x-10 mt-10 px-10">
         <a href="#about">About</a>
         <a href="#Price">Price List</a>
         <a href="#Floor">Floor Plans</a>
         <a href="#Photos">Photos & Videos</a>
         <a href="#amenities">Amenities</a>
         <a href="#Specifications">Specifications</a>
         <a href="#Map">Map & Landmarks</a>
         <a href="#Expert">Top Experts</a>
         <a href="#Rera">Rera Details</a>
      </div>
       <div id="about" className="mx-auto md:mx-20">
            <h3 className="text-3xl my-10">About West Center Meridian Courts</h3>
            <div className="text-base font-light text-gray-600">

            <p className={`${!expanded ? 'line-clamp-6 ' : ''}`}>
                West Center Meridian Courts at Kandivali, Mumbai, is a well-planned residential project that seamlessly blends nature with urban city life. Located in Kandivali, Mumbai's fastest developing suburb, with growing infrastructure and seamless connectivity to commercial landmarks.
It is an epitome of architectural excellence, offering 1, 2, 3, and 4 BHK apartments ranging in size from 283 to 1397 sq ft., spread across 2.5 acres. The apartments face the hills of the National Park to the east and the beaches to the west.

West Center Meridian Courts, Kandivali, has numerous luxury amenities, which include a Grand Lobby, Gymnasium, Mini Theatre, Modular kitchen, and many more, making it a perfect blend of comfort, convenience, and luxury. Surrounded by tree-lined avenues, it offers a serene escape from urban chaos.

Additionally, it has Tower 1 and Tower 2, with a proposed Tower 3. Each tower has more than 46 floors, crafted with cutting-edge design that blends modern style with everyday comfort to create spacious homes that nurture family bonding.

With West Center Meridian Courts' future-ready infrastructure and thoughtful premium comforts, this neighborhood is fast becoming one of the city's most desired addresses. The project brings convenience to your doorstep with elegant commercial spaces and a curated range of needs and little indulgences. Parking is stress-free too, with three basement levels and four podium levels designed to keep your car secure and your day seamless.

Supported by the trusted Origin Corp, which is known for interweaving timeless design with cutting-edge technology. They have been leaving a remarkable impact on the industry, containing a strong track of successful projects.

Amenities at West Center Meridian Courts

Kids have their own designated world where they can play and get social.
A sitting area for senior citizens is designed in such a way that they can watch their generation grow.
Video door phone facility to enhance security and safety.
Rooftop podium contains a Landscaped Garden where one can chill and enjoy nature.
Jogging track to recharge your mind and soul.
After a hectic day, find yourself chilling in the Indoor Games Room.
A gym, yoga & meditation area, is designed to rejuvenate the inner soul.
Treat yourself with a Sauna and Spa.
Minitheatre to take a break from busy schedules.
Sports pitch to maintain physical health.
Virtual game zone, where the game begins and reality ends.
Cafeteria where hunger meets its match.
Host unforgettable parties in the Party Lawn under the open sky.
Your Gateway to Kandivali: Location Benefits at West Center Meridian Courts

Discover a lifestyle where everything you need is just moments away from West Center Meridian Courts

Link Road – 0.4 km
Mith Chowki Metro Station – 0.5 km
Kandivali Railway Station – 3.3 km
Malad Railway Station – 3.4 km
Malwani Fire Station – 3.1 km
Social Infrastructure Highlights

Aksa Beach, Marve Beach, MCA Sachin Tendulkar Gymkhana, and HyperCity are the main attractions.
Retail & Entertainment Hubs: Infiniti Mall, Inorbit Mall, DMart
Educational Institutions: Ryan International School, Billabong International School, Pinnacle High International School, Carmel of St.Joseph School
Advanced Healthcare: Zenith Hospital, Sahaya Nursing Home, Janet Castle
Hotels & Restaurants: Liberty La Classique, Fingerprint Kitchen & Bar, Timbuctoo.
Upcoming Projects near West Center Meridian Courts, Kandivali, Mumbai

Discover the future of the neighbourhood with these upcoming projects.
Scenic Coastal Freeway: South Mumbai can be reached in mere 20 minutes.
Mumbai Metro Line: The Dahisar-Bandra Mankhurd metro line and the Andheri-Dahisar metro lines will connect to the eastern and western lines.
The proposed Western Jetty-Water Transport System along the West coast of Mumbai will connect Churchgate to Bhayandar.
Proposed three six-lane cable-stayed bridges to rise between Andheri to Borivali.
The upcoming project of the Borivali to Thane ropeway will connect two major suburbs.
These updates will make daily life smoother and real estate values soar.

West Center Meridian Courts, Kandivali, Mumbai: An Investment Marvel

Thane has immensely emerged as a prime location for those seeking an urban lifestyle combined with modern conveniences.
Kandivali has seen a 7.6%* property price increase last year, driven by connectivity and growing demand.
The Average rental yield in the area is approximately 3%*. It is a favored area among homebuyers due to its proximity to the railway station and the metro station.

*These figures are derived from our Data Intelligence team and may differ slightly in actuality.*

With Origin Corp, discover a home that goes beyond expectations-crafted for comfort, style, and legacy.
            </p>
            <button 
                onClick={() => setExpanded(!expanded)}
                className="mt-4 px-4 py-2 text-yellow-600 border border-yellow-400 rounded-lg hover:bg-yellow-50 font-medium"
            >
                {expanded ? 'See Less' : 'See More'}
            </button>
            </div>
        </div>
        <div id="Price" className="my-10 mx-auto md:mx-20 rounded">
           <h3 className="text-3xl my-10">West Center Meridian Courts Price List</h3>
           <hr className="opacity-10" />
           <div>

           <table className="table-auto w-full my-10 border border-gray-300" cellspacing="0" cellpadding="5">
  <thead>
            <td className="text-left" valign="middle">Unit Type (Saleable)</td>
            <td className="text-center" valign="middle" colspan="2">
                Price*
            </td>
    </thead>

  <tbody className="divide divide-gray-200">
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">1 BHK Apartment 448 Sq. Ft</td>
      <td className="px-4 py-2">₹ 1.00 Cr</td>
      <td className="px-4 py-2 text-blue-600 cursor-pointer">
        Check Availability
      </td>
    </tr>

    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">2 BHK Apartment 610 Sq. Ft</td>
      <td className="px-4 py-2">₹ 1.30 Cr</td>
      <td className="px-4 py-2 text-blue-600 cursor-pointer">
        Check Availability
      </td>
    </tr>

    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">2 BHK Apartment 685 Sq. Ft</td>
      <td className="px-4 py-2">₹ 1.55 Cr</td>
      <td className="px-4 py-2 text-blue-600 cursor-pointer">
        Check Availability
      </td>
    </tr>

    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">3 BHK Apartment 915 Sq. Ft</td>
      <td className="px-4 py-2">₹ 1.95 Cr</td>
      <td className="px-4 py-2 text-blue-600 cursor-pointer">
        Check Availability
      </td>
    </tr>

    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">3 BHK Apartment 949 Sq. Ft</td>
      <td className="px-4 py-2">₹ 2.02 Cr</td>
      <td className="px-4 py-2 text-blue-600 cursor-pointer">
        Check Availability
      </td>
    </tr>
  </tbody>
</table>
           </div>
        </div>

{/* <section id="Floor">
  <FloorPlan/>
</section> */}
       <div id="amenities" className="my-10 mx-auto md:mx-20 rounded max-w-6xl bg-gray-100 py-1 px-10 h-90">
        <h3 className="text-3xl my-10">West Center Meridian Courts Amenities</h3>
        <hr className="opacity-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="flex flex-col border border-gray-300 rounded w-40 h-20 py-5 items-center">
             <Dumbbell /> 
             <h3>Gym</h3>
          </div>
          <div className="flex flex-col border border-gray-300 rounded w-40 h-20 py-5 items-center">
             <Film/>
             <h3>Film</h3>
          </div>
          <div className="flex flex-col border border-gray-300 rounded w-40 h-20 p-5 items-center">
             <Utensils/>
             <h3>Utensils</h3>
          </div>
          <div className="flex flex-col border border-gray-300 rounded w-40 h-20 py-5 items-center">
            <Footprints/>
             <h3>Footprints</h3>
          </div>
          <div className="flex flex-col border border-gray-300 rounded w-40 h-20 py-5 items-center">
              <Armchair/>
             <h3>Armchair</h3>
          </div>
          <div className="flex flex-col border border-gray-300 rounded w-40 h-20 py-5 items-center">
             <Gamepad2/>
             <h3>Gamepad2</h3>
          </div>
          <div className="flex flex-col border border-gray-300 rounded w-40 h-20 py-5 items-center">
              <Video/>
             <h3>Video</h3>
          </div>
          <div className="flex flex-col border border-gray-300 rounded w-40 h-20 py-5 items-center">
            <TreePine/>
             <h3>TreePine</h3>
          </div>
        
        </div>
      </div> 

      <div id="Specifications" className="my-10 mx-auto md:mx-20 rounded max-w-6xl bg-gray-100 py-1 px-10">
        <h3 className="text-3xl my-10">West Center Meridian Courts Specifications</h3>
        <hr className="opacity-10" />
        <div className="flex py-5 px-10">
          <p className="text-black w-1/2 font-normal">Master Bedroom-Walls</p>
          <p className="text-gray-600">Oil Bound Distemper</p>
        </div>
        <hr className="opacity-10" />
        <div className="flex py-5 px-10">
          <p className="text-black w-1/2 font-normal">Master Bedroom-Flooring</p>
          <p className="text-gray-600">Vitrified Tiles</p>
        </div>
        <hr className="opacity-10" />
        <div className="flex py-5 px-10">
          <p className="text-black w-1/2 font-normal">Other Bedrooms-Flooring</p>
          <p className="text-gray-600">Vitrified Tiles</p>
        </div>
        <hr className="opacity-10" />
        <div className="flex py-5 px-10">
          <p className="text-black w-1/2 font-normal">Walls</p>
          <p className="text-gray-600">Oil Bound Distemper</p>
        </div>
        <hr className="opacity-10" />
        <div className="flex py-5 px-10">
          <p className="text-black w-1/2 font-normal">Living Area-Flooring</p>
          <p className="text-gray-600">Vitrified Tiles</p>
        </div>
        <hr className="opacity-10" />
        <div className="flex py-5 px-10">
          <p className="text-black w-1/2 font-normal">Fittings & Fixtures</p>
          <p className="text-gray-600">Split Air Conditioner</p>
        </div>
        <hr className="opacity-10" />
        <div className="flex py-5 px-10">
          <p className="text-black w-1/2 font-normal">Kitchen-Equipments</p>
          <p className="text-gray-600">Modular Kitchen</p>
        </div>
        <hr className="opacity-10" />
      </div>
    </section>
  );
}

