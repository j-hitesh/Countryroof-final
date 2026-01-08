import { Contact2 } from "lucide-react"
import { useHref } from "react-router-dom"

const Contact = () => {
return (
    <section className="px-20 bg-blue-100">
            <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Let's Connect</h2>
                    <p className="text-center text-sm">Ready to find your dream property? Our expert team is here to guide you every step of the way.</p>
            </div>
         <div className="grid grid-cols-2 my-8 bg-white/50 rounded-lg backdrop-blur-md max-w-6xl justify-between">
            <iframe className="w-2xl h-110" 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56134.78012972459!2d76.99285200475691!3d28.436639624464842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d0000001%3A0xb832ca965fff5828!2sCountryroof%20Infratech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1767863587416!5m2!1sen!2sin" 
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <form className="flex flex-col gap-4 p-6 w-md">
                <h2 className="text-xl font-medium">Consult a Property Expert Now</h2>
                    <div>
             <label htmlFor="name" className="block mb-2">Name</label>
             <input type="text" id="name" placeholder="Your Name" className="w-full border p-2 rounded" />
                    </div>
                    <div>
             <label htmlFor="email" className="block mb-2">Email</label>
             <input type="email" id="email" placeholder="Your Email" className="w-full border p-2 rounded" />
                    </div>
                    <div>
                <label htmlFor="message" className="block mb-2">Message</label>
             <textarea id="message" placeholder="Your Message" className="w-full border p-2 rounded h-24"></textarea>
                    </div>
                    <button type="submit" className="bg-[#2D548F] text-white py-2 rounded hover:bg-[#305081] cursor-pointer">Send Message</button>
            </form>
         </div>
         <div>
            <h3>Get In Touch</h3>
            <a href="mailto:countryroof.infobirth@gmail.com">
                    <Contact2/>
                    <div>
                     <h3>Email</h3>
                    <p>countryroof.infobirth@gmail.com</p></div>
            </a>
            <a href="tel:+919205190065">
                <div>
                    <h3>Phone</h3>
                    <p>+91 9205190065</p>
                </div>
            </a>
            <div>
                <h3 className="text-2xl font-medium">Why Choose 100acress?</h3>
                <p>Trusted by thousands of property seekers across India</p>
                <div>
                    <h4>Verified Listings</h4>
                    <p>All properties are verified and authentic</p>
                </div>
                <div>
                    <h4>Expert Support</h4>
                    <p>Professional guidance from real estate experts</p>
                </div>
                <div>
                    <h4>24x7 Assistance</h4>
                    <p>Round-the-clock support for all your needs</p>
                </div>
            </div>

         </div>
    </section>
)
}

export default Contact