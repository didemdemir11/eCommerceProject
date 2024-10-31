import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import PageContent from "../../components/layout/PageContent";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <PageContent>
      {/* Contact Section */}
      <div className="contact-section flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">
        {/* Sol Kısım: Metin ve İkonlar */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h5 className="text-[#252B42] font-bold text-lg">CONTACT US</h5>
          <h1 className="font-bold text-4xl text-[#252B42]">
            Get in touch today!
          </h1>
          <p className="text-[#737373] text-xl font-normal mt-4">
            We know how large objects will act, but things on a small scale
          </p>
          <h3 className="text-[#252B42] font-bold text-2xl mt-6">
            Phone: +451 215 215
          </h3>
          <h3 className="text-[#252B42] font-bold text-2xl">
            Fax: +451 215 215
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <FontAwesomeIcon icon={faFacebook} color="#252B42" />
            <FontAwesomeIcon icon={faInstagram} color="#252B42" />
            <FontAwesomeIcon icon={faTwitter} color="#252B42" />
            <FontAwesomeIcon icon={faLinkedin} color="#252B42" />
          </div>
        </div>

        {/* Sağ Kısım: Görsel */}
        <div className="flex-1">
          <img
            src="/images/contactPage1.png"
            className="w-full h-auto md:h-[400px] object-cover mx-auto md:mx-0"
            alt="Contact Illustration"
          />
        </div>
      </div>

      {/* Office Section */}
      <div className="visit-office-section mt-10 text-center  md:flex md:items-start md:space-x-6">
        <div className="flex-1">
          <h6 className="text-[#252B42] font-bold text-lg">VISIT OUR OFFICE</h6>
          <h2 className="font-bold text-5xl text-[#252B42] mt-2">
            We help small businesses with big ideas
          </h2>
        </div>
      </div>

      {/* Contact Information Boxes */}
      <div className="contact-info-boxes mt-20 flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0 md:space-x-0">
        {/* Phone Box */}
        <div className="flex flex-col items-center w-[327px] h-[343px] bg-white p-4 rounded-md ">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-4xl mb-4 text-[#23A6F0]"
          />
          <h6 className="text-xl font-semibold">georgia.young@example.com</h6>
          <h6 className="text-xl font-semibold">georgia.young@ple.com</h6>
          <h5 className="font-bold text-lg mt-4">Get Support</h5>
          <button className="mt-4 py-2 px-5 rounded border border-[#23A6F0] text-[#23A6F0]">
            Submit Request
          </button>
        </div>

        {/* Location Box */}
        <div className="flex flex-col items-center w-[327px] h-[343px] bg-white p-4 rounded-md ">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-4xl mb-4 text-[#23A6F0]"
          />
          <h6 className="text-xl font-semibold">georgia.young@example.com</h6>
          <h6 className="text-xl font-semibold">georgia.young@ple.com</h6>
          <h5 className="font-bold text-lg mt-4">Get Support</h5>
          <button className="mt-4 py-2 px-5 rounded border border-[#23A6F0] text-[#23A6F0]">
            Submit Request
          </button>
        </div>

        {/* Email Box */}
        <div className="flex flex-col items-center w-[327px] h-[343px] bg-white p-4 rounded-md ">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-4xl mb-4 text-[#23A6F0]"
          />
          <h6 className="text-xl font-semibold">georgia.young@example.com</h6>
          <h6 className="text-xl font-semibold">georgia.young@ple.com</h6>
          <h5 className="font-bold text-lg mt-4">Get Support</h5>
          <button className="mt-4 py-2 px-5 rounded border border-[#23A6F0] text-[#23A6F0]">
            Submit Request
          </button>
        </div>
      </div>

      {/* Additional Section */}
      <div className="text-center  mb-10">
        <img
          src="/images/arrow.png"
          className="mx-auto "
          style={{ width: "70px", height: "20px", color: "#23A6F0" }}
          alt="Arrow Icon"
        />
        <h5 className="text-[#252B42] font-bold text-lg mt-6">
          WE CAN'T WAIT TO MEET YOU
        </h5>
        <h1 className="font-bold text-6xl text-[#252B42] mt-2">Let’s Talk</h1>
        <button className="mt-6 bg-[#23A6F0] text-white py-2 px-6 rounded-lg">
          Try it free now
        </button>
      </div>
    </PageContent>
  );
};

export default ContactPage;
