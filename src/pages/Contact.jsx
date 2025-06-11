import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
import Pattern2 from "../assets/icons/pattern2.svg";
import Pattern3 from "../assets/icons/pattern3.svg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_qwjvuqq", "template_62ma6jg", form.current, "oLfZFvb5ZBKQSRs9p").then(
      (result) => {
        window.alert("Message Sended!");
        e.target.reset();
      },
      (error) => {
        window.alert("Error!");
      }
    );
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <img src={Pattern3} alt="" className="absolute right-0 top-9 md:top-12 w-40 opacity-20" />
        <img src={Pattern2} alt="" className="absolute left-0 top-9 md:top-12 w-40 opacity-20" />

        <div className="contact section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl w-max mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 my-12">Contact Us</h1>

          <p className="w-full lg:w-2/4 mx-auto text-center sm:text-lg">Get in touch with us and let us know how we can help you.</p>

          <div className="contact-container grid mt-12">
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-card">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2">
                    <path
                      d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                      stroke="#07960c"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3 className="font-semibold font-lexend">Email</h3>
                  <span className="contact-card-data mb-2">kaltimku@gmail.com</span>

                  <a href="mailto:kaltimku@gmail.com" className="contact-button mb-2">
                    Contact us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#07960c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>

                <div className="contact-card">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                      fill="#07960c"
                    />
                  </svg>

                  <h3 className="font-semibold font-lexend">Whatsapp</h3>
                  <span className="contact-card-data mb-2">0811-594-546</span>

                  <a href="https://api.whatsapp.com/send?phone=62811594546&text=Hello, more information!" target="_blank" className="contact-button mb-2">
                    Contact us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#07960c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a href="https://www.facebook.com/elcometer.sandblasting.balikpapan/" target="_blank" className="flex justify-center items-center gap-2 border-2 border-[#07960c] rounded-lg py-2">
                    <svg className="w-5 h-5 text-[#07960c]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/cv.rizkibangun/" target="_blank" className="flex justify-center items-center gap-2 border-2 border-[#07960c] rounded-lg py-2">
                    <svg className="w-5 h-5 text-[#07960c]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-content">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="contact-form-div">
                  <label htmlFor="" className="contact-form-tag">
                    Name
                  </label>
                  <input type="text" name="name" className="contact-form-input" placeholder="Insert your name" />
                </div>

                <div className="contact-form-div">
                  <label htmlFor="" className="contact-form-tag">
                    Email
                  </label>
                  <input type="email" name="email" className="contact-form-input" placeholder="Insert your email" />
                </div>

                <div className="contact-form-div contact-form-area">
                  <label htmlFor="" className="contact-form-tag">
                    Message
                  </label>
                  <textarea name="message" cols="30" rows="10" className="contact-form-input" placeholder="Write your message here!"></textarea>
                </div>

                <button type="submit" className="cursor-pointer inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded transition">
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 mb-24">
            <h1 className="text-3xl font-bold text-center mb-12">Or Visit Us Here</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.869995460516!2d116.87205300000001!3d-1.2492467999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1468cad2c11c9%3A0x227c6c91d6aceec7!2sCV.%20Rizki%20Bangun!5e0!3m2!1sid!2sid!4v1749638184129!5m2!1sid!2sid"
              loading="lazy"
              title="CV. Rizki Bangun"
              className="shadow-xl rounded w-full max-w-3xl h-96 mx-auto"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
