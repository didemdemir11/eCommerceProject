import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] text-[#252B42] py-8 px-4 md:px-20">
      {/* Hero Bölümü */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-12">
        <h3 className="font-bold text-2xl md:text-3xl">Didi</h3>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <div>
            <FontAwesomeIcon icon={faFacebook} className="text-[#23A6F0]" />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} className="text-[#23A6F0]" />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} className="text-[#23A6F0]" />
          </div>
        </div>
      </div>

      {/* Main Bölümü */}
      <div className="flex flex-col md:flex-row justify-between text-left space-y-10 md:space-y-0 md:space-x-10 md:px-10">
        {/* Company Info */}
        <div>
          <h5 className="font-bold text-lg mb-4">Company Info</h5>
          <ul className="space-y-2 text-[#737373]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">We are hiring</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="font-bold text-lg mb-4">Legal</h5>
          <ul className="space-y-2 text-[#737373]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">We are hiring</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h5 className="font-bold text-lg mb-4">Features</h5>
          <ul className="space-y-2 text-[#737373]">
            <li>
              <a href="#">Business Marketing</a>
            </li>
            <li>
              <a href="#">User Analytic</a>
            </li>
            <li>
              <a href="#">Live Chat</a>
            </li>
            <li>
              <a href="#">Unlimited Support</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="font-bold text-lg mb-4">Resources</h5>
          <ul className="space-y-2 text-[#737373]">
            <li>
              <a href="#">IOS & Android</a>
            </li>
            <li>
              <a href="#">Watch a Demo</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h5 className="font-bold text-lg mb-4">Get In Touch</h5>
          <div className="flex space-x-0">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full max-w-[321px] h-[58px] px-4 bg-[#F9F9F9] border border-[#E6E6E6] text-[#737373] rounded-l-md"
            />
            <button className="bg-[#23A6F0] text-white px-4 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Alt Kısmı */}
      <div className="mt-10 md:mt-16 text-center md:text-left">
        <h6 className="text-[#737373] text-sm font-bold">
          Made With Love By Didi. All Rights Reserved.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
