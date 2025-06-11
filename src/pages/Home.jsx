import { Link } from "react-router-dom";
import HeroBg from "../assets/images/hero-bg-1.png";
import MapIcon from "../assets/icons/map.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import TrustIcon from "../assets/icons/trust.svg";
import CertifiedIcon from "../assets/icons/certified.svg";
import PriceIcon from "../assets/icons/price.svg";
import CTABg from "../assets/images/cta-bg.png";
import LogoWhite from "../assets/icons/logo-white.svg";
import Pattern from "../assets/icons/pattern.svg";
import VisiImg1 from "../assets/images/visi-1.png";
import VisiImg2 from "../assets/images/visi-2.png";
import VisiImg3 from "../assets/images/visi-3.png";
import VisiImg4 from "../assets/images/visi-4.png";
import Certificate1 from "../assets/images/certificate-1.png";
import Certificate2 from "../assets/images/certificate-2.png";

export default function Home() {
  return (
    <>
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
                <a href="https://maps.app.goo.gl/mU62TXGjx26Cf7sD6" target="_blank" className="inline-flex items-center gap-2 bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full transition">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-12 rounded-3xl overflow-hidden">
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
      </div>

      {/* About Us  */}
      <div className="my-12 py-12 relative overflow-hidden">
        <img src={Pattern} alt="" className="absolute right-0 -top-8 w-40 h-auto -rotate-45 -z-1 opacity-10" />
        <img src={Pattern} alt="" className="absolute left-0 -top-8 w-40 h-auto rotate-45 -z-1 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold tracking-tighter text-center">About Us</h1>
          <p className="text-xl mt-6 text-center max-w-4xl mx-auto">
            CV. Rizki Bangun is a company that supplies sandblasting tools and materials without service installation, catering to various industrial needs. The company was founded by Mr. Nanang on August 15, 1997, South Balikpapan
            District, Balikpapan City, East Kalimantan. It is currently led by Mr. Susanto, and is located at Jln. MT. Haryono Dalam III. <br /> <br /> CV. Rizki Bangun serving businesses primarily in the Kalimantan region. The products
            offered include various types of sandblasting equipment and abrasive materials, specifically designed to assist industries in cleaning and preparing surfaces before painting or recoating processes.
          </p>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="my-12 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between md:items-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">Vision & Mission</h1>
            <p className="md:text-sm text-base md:w-1/2 text-justify font-semibold">Get to know our commitment and vision as a reliable provider of sandblasting tools and materials across Indonesia.</p>
          </div>

          {/* Feature Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Vision Statement",
                description: "To become a trusted supplier of sandblasting tools and materials in Indonesia, excelling in quality, service, and digital innovation.",
                image: VisiImg1,
                size: "lg:col-span-3 lg:row-span-2",
              },
              {
                title: "Mission Statement",
                description: "1. Provide high-quality products.\n2. Offer accessible product information.\n3. Build strong industrial relations.\n4. Innovate in digital marketing.",
                image: VisiImg2,
                size: "lg:col-span-2 lg:row-span-2",
              },
              {
                title: "Ready Stock Availability",
                description: "We keep a well-managed warehouse to ensure immediate availability for all industrial needs.",
                image: VisiImg3,
                size: "lg:col-span-2 lg:row-span-2",
              },
              {
                title: "Fast & Secure Delivery",
                description: "Timely and safe delivery of all products throughout Indonesia is our standard commitment.",
                image: VisiImg4,
                size: "lg:col-span-3 lg:row-span-2",
              },
            ].map((feature, index) => (
              <div key={index} className={`relative overflow-hidden rounded-3xl group h-80 ${feature.size}`}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${feature.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 bg-opacity-25"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h2 className="text-4xl font-bold text-white tracking-tighter mb-4">{feature.title}</h2>
                    {feature.description && <p className="w-2/3 text-white text-opacity-90 text-sm whitespace-pre-line">{feature.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certified section  */}
      <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Company Certifications</h2>

          <div className="space-y-16">
            {[
              {
                title: "Official Support Letter – Airblast Equipment Indonesia",
                description: "Leading specialist with +20 years of experience in the field of Surface Preparation and Coating since 1997.",
                image: Certificate1,
                reverse: false,
              },
              {
                title: "Authorized Distributor Certificate – Graco Inc.",
                description:
                  "CV. Rizki Bangun is officially certified as an Authorized Distributor of Graco Inc. for the Kalimantan–Indonesia region. This certification acknowledges our role in supplying Graco’s high-performance protective coating and foam equipment, widely recognized in the global industrial market.",
                image: Certificate2,
                reverse: true,
              },
            ].map((cert, idx) => (
              <div key={idx} className={`flex flex-col ${cert.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16`}>
                <div className="md:w-1/2">
                  <img src={cert.image} alt={cert.title} className="w-full h-auto object-contain" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
