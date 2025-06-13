import Logo from "../assets/icons/logo.svg";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#e9e9e9]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative pb-4 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="">
              <a href="/" className="text-xl md:text-3xl font-bold mr-4 flex items-center gap-2 font-montserrat text-[#07960c]">
                <img src={Logo} alt="CV Rizki Bangun" className="w-8 h-8 md:w-10 md:h-10" />
                CV. RIZKI BANGUN
              </a>
              <p className="text-sm md:text-base mt-4 sm:mt-8 max-w-xl">Jl. Mt. Haryono Dalam III No.71, sungai nangka, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76114</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-start lg:justify-end items-end">
              {[
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/elcometer.sandblasting.balikpapan/",
                  icon: <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />,
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/cv.rizkibangun/",
                  icon: (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    />
                  ),
                },
                {
                  name: "Whatsapp",
                  url: "https://api.whatsapp.com/send?phone=62811594546&text=Hello, more information!",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                      />
                    </svg>
                  ),
                },
              ].map(({ name, url, icon }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="group relative h-fit transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] p-2 rounded-full shadow-md">
                  <span className="tooltip absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-white text-xs py-1 px-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:-top-4 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none">
                    {name}
                  </span>
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <hr className="border-gray-500 sm:mx-auto mt-4 sm:mt-8 mb-4" />

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-xs text-gray-500">
            <span className="text-center">
              © 2025{" "}
              <a href="/" className="hover:underline">
                CV. Rizki Bangun
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex items-center">
              <a href="/terms" className="text-center hover:underline">
                Terms
              </a>
              <span className="mx-2 text-center">•</span>
              <a href="/privacy" className="text-center hover:underline">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
