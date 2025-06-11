import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroBg from "../assets/images/hero-bg-1.png";
import MapIcon from "../assets/icons/map.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import TrustIcon from "../assets/icons/trust.svg";
import CertifiedIcon from "../assets/icons/certified.svg";
import PriceIcon from "../assets/icons/price.svg";
import CTABg from "../assets/images/cta-bg.png";
import LogoWhite from "../assets/icons/logo-white.svg";
import Pattern from "../assets/icons/pattern.svg";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[552px] md:min-h-[calc(100vh-100px)]">
        <div className="relative h-[552px] md:min-h-[calc(100vh-100px)] my-2 bg-white rounded-3xl shadow-lg lg:shadow-none overflow-hidden">
          <img src={HeroBg} alt="hero-img" className="absolute top-0 right-0 w-full lg:w-1/2 h-full object-cover lg:object-right rounded-3xl" />

          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <div className="px-4 md:px-8 xl:px-0 w-3/4 md:max-w-lg lg:max-w-xl xl:max-w-2xl text-white lg:text-black">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-bold tracking-tighter font-montserrat">Supporting Your Industrial Strength With Trusted Toughness.</h1>
              <p className="max-w-lg my-6 text-gray-500">Make every construct more perfect with our sandblasting equipment. Consult needs ? You are with us!</p>

              {/* CTA Button */}
              <div className="flex gap-4">
                {/* Visit Us Button */}
                <a href="https://maps.app.goo.gl/mU62TXGjx26Cf7sD6" target="_blank" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition">
                  <img src={MapIcon} alt="" className="w-6 h-6" />
                  Visit Us
                </a>

                {/* Contact Us Button */}
                <Link to="/contact" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-full transition">
                  <img src={PhoneIcon} alt="" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Card 1 */}
            <div className="relative flex flex-col items-center border-3 border-gray-300 rounded-lg px-6 pt-12 pb-6">
              <div className="absolute -top-6 bg-white px-2">
                <img src={TrustIcon} alt="trust" className="w-12 h-12 opacity-50" />
              </div>
              <p className="leading-relaxed">
                <strong>Established since 1997</strong>, has experience
                <br />
                over 20 years in the sandblasting industry.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative flex flex-col items-center border-3 border-gray-300 rounded-lg px-6 pt-12 pb-6">
              <div className="absolute -top-6 bg-white px-2">
                <img src={CertifiedIcon} alt="certified" className="w-12 h-12 opacity-50" />
              </div>
              <p className="leading-relaxed">
                <strong>Committed</strong> to providing high quality sandblasting tools
                <br />
                designed for various industrial needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col items-center border-3 border-gray-300 rounded-lg px-6 pt-12 pb-6">
              <div className="absolute -top-6 bg-white px-2">
                <img src={PriceIcon} alt="price" className="w-12 h-12 opacity-50" />
              </div>
              <p className="leading-relaxed">
                <strong>Offers</strong> competitive prices for each item,
                <br />
                with flexible purchasing options to customer needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full py-12 overflow-hidden">
        {/* Background Image */}
        <img src={CTABg} alt="Call to Action Background" className="absolute inset-0 w-full h-full object-cover z-[-1]" />

        {/* Optional CTA Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-col items-center justify-center">
            <img src={LogoWhite} alt="" />
            <h2 className="text-3xl font-bold my-4">CV. RIZKI BANGUN</h2>
            <p className="mb-6 text-3xl font-bold text-center max-w-4xl">"High-Quality Sandblasting Equipment for Superior Surface Preparation and Industrial Finishing”</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-full transition">
              <img src={PhoneIcon} alt="" />
              Contact Now
            </Link>
          </div>
        </div>
      </div>

      {/* About Us  */}
      <div className="my-12 py-12 relative overflow-hidden">
        <img src={Pattern} alt="" className="absolute right-0 -top-8 w-40 h-auto -rotate-45 -z-1 opacity-10" />
        <img src={Pattern} alt="" className="absolute left-0 -top-8 w-40 h-auto rotate-45 -z-1 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold font-lexend text-center">About Us</h1>
          <p className="text-xl mt-6 text-center">
            CV. Rizki Bangun is a company that supplies sandblasting tools and materials without service installation, catering to various industrial needs. The company was founded by Mr. Nanang on August 15, 1997, South Balikpapan
            District, Balikpapan City, East Kalimantan. It is currently led by Mr. Susanto, and is located at Jln. MT. Haryono Dalam III. <br /> <br /> CV. Rizki Bangun serving businesses primarily in the Kalimantan region. The products
            offered include various types of sandblasting equipment and abrasive materials, specifically designed to assist industries in cleaning and preparing surfaces before painting or recoating processes.
          </p>
        </div>
      </div>

      {/* visi misi  */}
      <div className="my-12 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row gap-6 justify-between md:items-center">
            <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter"></h1>
            <p class="md:text-sm text-base md:w-1/2 text-justify font-semibold">Kenalan sama fitur spesial Menpy AI yang nggak cuma canggih, tapi juga dibuat khusus buat bantuin kamu jadi versi terbaik dari diri sendiri!</p>
          </div>
        </div>
      </div>
    </>
  );
}
