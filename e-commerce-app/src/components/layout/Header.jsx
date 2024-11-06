import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faShoppingCart,
  faBars,
  faPhone,
  faEnvelope,
  faHeart,
  faSignOutAlt,
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/authActions";
import md5 from "md5";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isHomePage = location.pathname === "/";
  const isShopOrProductPage =
    location.pathname === "/shop" || location.pathname === "/product";

  const userInfo = useSelector((state) => state.user.userInfo);

  const gravatarUrl = userInfo
    ? `https://www.gravatar.com/avatar/${md5(
        userInfo.email.trim().toLowerCase()
      )}?d=identicon`
    : null;

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="hidden md:flex justify-between items-center p-2 bg-[#252B42] text-white">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faPhone} />
            <span>(225) 555-0118</span>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>kdidemdemir@gmail.com</span>
            <h6 className="text-sm">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>
          <div className="flex items-center space-x-4">
            <h6 className="text-sm">Follow Us:</h6>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>

        <header className="flex justify-between items-center p-4 bg-white">
          <div className="md:hidden flex flex-col w-full space-y-4">
            <div className="flex justify-between items-center w-full px-4">
              <div className="text-2xl font-bold text-[#252B42]">Didi</div>
              <button>
                <FontAwesomeIcon icon={faBars} className="text-gray-600" />
              </button>
            </div>

            <div className="flex flex-col items-center space-y-2 mt-4">
              {isHomePage ? (
                <>
                  <Link to="/" className="text-lg text-gray-700">
                    Home
                  </Link>
                  <Link to="/products" className="text-lg text-gray-700">
                    Product
                  </Link>
                  <Link to="/pricing" className="text-lg text-gray-700">
                    Pricing
                  </Link>
                  <Link to="/contact" className="text-lg text-gray-700">
                    Contact
                  </Link>
                </>
              ) : (
                <>
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
                  <Link to="/pages" className="text-lg text-gray-700">
                    Pages
                  </Link>
                </>
              )}
            </div>

            <div className="flex flex-col items-center space-y-2 mt-4 text-[#23A6F0]">
              {userInfo ? (
                <>
                  <img
                    src={gravatarUrl}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-1">
                    <FontAwesomeIcon icon={faUser} />
                    <Link
                      to="/login"
                      className="text-[#23A6F0] hover:underline"
                    >
                      Login
                    </Link>{" "}
                    /
                    <Link
                      to="/signup"
                      className="text-[#23A6F0] hover:underline"
                    >
                      Register
                    </Link>
                  </div>
                </>
              )}
              <FontAwesomeIcon icon={faSearch} />
              <FontAwesomeIcon icon={faShoppingCart} />
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between w-full">
            <div className="text-2xl font-bold text-[#252B42]">Didi</div>
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-lg text-gray-700">
                Home
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link
                      to="/shop"
                      className="text-lg text-gray-700 inline-flex"
                    >
                      <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/women">Kadın</Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/shop/men">Erkek</Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link to="/about" className="text-lg text-gray-700">
                About
              </Link>
              <Link to="/blog" className="text-lg text-gray-700">
                Blog
              </Link>
              <Link to="/contact" className="text-lg text-gray-700">
                Contact
              </Link>
              <Link to="/pages" className="text-lg text-gray-700">
                Pages
              </Link>
            </nav>
            <div className="flex space-x-4 text-[#23A6F0]">
              {userInfo ? (
                <>
                  <img
                    src={gravatarUrl}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-[#23A6F0] hover:underline">
                    <FontAwesomeIcon icon={faUser} /> Login
                  </Link>
                  <Link to="/signup" className="text-[#23A6F0] hover:underline">
                    Register
                  </Link>
                </>
              )}
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
          </div>
        </header>

        {isHomePage && (
          <div className="mt-4 w-full">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div
                    className="relative bg-cover bg-center h-64 md:h-[400px] lg:h-[500px] xl:h-[600px] h-full w-full min-h-[300px]"
                    style={{
                      backgroundImage: `url("/images/header-image.jpg")`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
                      <h5 className="text-white text-lg font-bold">
                        SUMMER 2020
                      </h5>
                      <h2 className="text-white text-3xl font-bold">
                        NEW COLLECTION
                      </h2>
                      <h4 className="text-gray-300 mt-2">
                        We know how large objects will act, but things on a
                        small scale.
                      </h4>
                      <button className="mt-4 bg-[#2DC071] text-white font-bold py-2 px-6 rounded">
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
