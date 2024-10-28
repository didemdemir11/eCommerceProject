import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NewsContainer = () => {
  return (
    <section className="bg-[#23856D] w-full h-[1300px] flex items-center justify-center text-white">
      <Carousel className="relative w-full h-full flex items-center">
        {/* Carousel yön okları */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer">
          {"<"}
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer">
          {">"}
        </CarouselNext>

        <CarouselContent>
          {/* Carousel itemları */}
          {[...Array(3)].map((_, index) => (
            <CarouselItem
              key={index}
              className="w-full h-full flex items-center justify-center p-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                <div className="text-center md:text-left md:pl-16 lg:pl-28">
                  <h4 className="text-lg mb-2">SUMMER 2020</h4>
                  <h2 className="text-3xl font-bold mb-4">
                    Vita Classic Product
                  </h2>
                  <p className="mb-4">
                    We know how large objects will act, but things on a small
                    scale.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">$16.48</h3>
                  <button className="bg-[#2DC071] text-white font-semibold py-2 px-6 rounded-md">
                    ADD TO CART
                  </button>
                </div>

                {/* Ürün Görseli */}
                <img
                  src="./images/carouselpicture.png"
                  alt="Vita Classic Product"
                  className="w-full h-64 md:w-1/2 lg:h-80 object-cover mt-8 md:mt-0"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default NewsContainer;
