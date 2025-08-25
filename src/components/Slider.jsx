"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        swipeable={true}
      >
        {/* Lungi */}
        <div className="relative h-72 md:h-[450px] w-full bg-amber-500 flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="relative text-center text-white px-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">Lungi</h2>
            <p className="text-sm md:text-lg leading-relaxed">
              A traditional South Asian garment worn by men. <br />
              Light, breathable, and comfortable for daily use. <br />
              Perfect for casual wear in warm climates.
            </p>
          </div>
        </div>

        {/* Gamsa */}
        <div className="relative h-72 md:h-[450px] w-full bg-amber-900 flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="relative text-center text-white px-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">Gamsa</h2>
            <p className="text-sm md:text-lg leading-relaxed">
              A versatile cotton towel used across Bangladesh. <br />
              Soft, lightweight, and quick-drying in nature. <br />
              Essential for bathing, prayer, and daily chores.
            </p>
          </div>
        </div>

        {/* Sharee */}
        <div className="relative h-72 md:h-[450px] w-full bg-amber-600 flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="relative text-center text-white px-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">Sharee</h2>
            <p className="text-sm md:text-lg leading-relaxed">
              An elegant six-yard attire worn by women. <br />
              Symbol of grace, culture, and timeless tradition. <br />
              Perfect for weddings, festivals, and special occasions.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
