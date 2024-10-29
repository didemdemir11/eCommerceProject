import React from "react";

const logos = [
  { src: "/logos/awslogo.png", link: "https://example1.com" },
  { src: "/logos/awslogo.png", link: "https://example2.com" },
  { src: "/logos/awslogo.png", link: "https://example3.com" },
  { src: "/logos/awslogo.png", link: "https://example4.com" },
  { src: "/logos/awslogo.png", link: "https://example5.com" },
];
const LogoSection = () => {
  return (
    <section className="bg-[#FAFAFA] py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-5 gap-8 justify-items-center">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 grayscale hover:grayscale-0 transition duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-full h-full"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;
