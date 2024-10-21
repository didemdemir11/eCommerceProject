import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faShoppingCart,
  faBars,
  faPhone,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Header = () => {
  return (
    <>
      <div className="hidden md:flex justify-between items-center p-2 bg-[#252B42] text-white">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faPhone} />
          <span>(225) 555-0118</span>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>kdidemdemir@gmail.com</span>
          <h6 className="text-sm">Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="flex items-center space-x-4">
          <h6 className="text-sm">Follow Us:</h6>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>

      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#252B42]">Didi</div>
        </div>

        <div className="md:hidden flex space-x-4">
          <button>
            <FontAwesomeIcon icon={faUser} className="text-gray-600" />
          </button>
          <button>
            <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
          </button>
          <button>
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600" />
          </button>
          <button>
            <FontAwesomeIcon icon={faBars} className="text-gray-600" />
          </button>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg text-gray-700">
            Home
          </Link>
          <Link to="/shop" className="text-lg text-gray-700">
            Shop
          </Link>
          <Link to="/about" className="text-lg text-gray-700">
            About
          </Link>
          <Link to="/blog" className="text-lg text-gray-700">
            Blog
          </Link>
          <Link to="/contact" className="text-lg text-gray-700">
            Contact
          </Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-4 text-[#23A6F0]">
          <button>
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <nav className="mt-4 md:hidden">
        <ul className="flex flex-col space-y-2 text-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Carousel Section */}
      <div className="mt-4 w-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: "url(/path/to/your/image.jpg)" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
                  <h5 className="text-white text-lg font-bold">SUMMER 2020</h5>
                  <h2 className="text-white text-3xl font-bold">
                    NEW COLLECTION
                  </h2>
                  <h4 className="text-gray-300 mt-2">
                    We know how large objects will act, but things on a small
                    scale.
                  </h4>
                  <button className="mt-4 bg-[#2DC071] text-white font-bold py-2 px-6 rounded">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </CarouselItem>
            {/* Add other Carousel Items as needed */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Header;
