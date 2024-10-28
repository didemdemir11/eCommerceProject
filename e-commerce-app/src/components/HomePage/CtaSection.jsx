import React from "react";

const CtaSection = () => {
  return (
    <section className="bg-white p-8 flex flex-col md:flex-row items-center md:items-center md:justify-start">
      {/* Görsel Alanı - Mobilde Butonların Altında, Masaüstünde Solda */}
      <img
        src="./images/ctapicture.png"
        alt="Part of the Neural Universe"
        className="w-full h-64 md:w-1/2 md:h-auto object-cover md:mb-0 mb-6 order-2 md:order-1"
      />

      {/* Yazı ve Buton Alanı */}
      <div className="text-center md:text-left md:ml-12 order-1 md:order-2">
        <h5 className="text-[#BDBDBD] font-bold text-sm mb-2">SUMMER 2020</h5>
        <h2 className="text-[#252B42] font-bold text-3xl md:text-4xl mb-4">
          Part of the Neural Universe
        </h2>
        <h4 className="text-[#737373] font-normal text-lg md:text-xl mb-6">
          We know how large objects will act, but things on a small scale.
        </h4>

        {/* Butonlar */}
        <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <button className="bg-[#23A6F0] text-white font-semibold py-2 px-4 rounded-md text-sm w-32">
            BUY NOW
          </button>
          <button className="bg-white border border-[#23A6F0] text-[#23A6F0] font-semibold py-2 px-4 rounded-md text-sm w-32">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
