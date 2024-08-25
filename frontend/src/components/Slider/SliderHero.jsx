import React, { useEffect } from "react";
import men_slider from "../../assets/Slider_banner/men_banner_slider.png";
import women_slider from "../../assets/Slider_banner/women_banner_slider.png";
import kid_slider from "../../assets/Slider_banner/kid_banner_slider.png";
import sport_slider from "../../assets/Slider_banner/sport_banner_slider.png";
import Slider from "react-slick";
import { Button } from "../Shared/Button";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router-dom";

export const SliderHero = () => {
  const HeroData = [
    {
      id: 1,
      title: "Men Shoes",
      image: men_slider,
      description: "Be Smart, Wear Unique Shoes",
      bgColor:"bg-[#4682B4]",
      text:"text-blue-800",
      link:'/men'
    },
    {
      id: 2,
      title: "Women Shoes",
      image: women_slider,
      description: "Strengthen your journey with us",
      bgColor:"bg-[#FFC0CB]",
      text:"text-red-800",
      link:'/women'
    },
    {
      id: 3,
      title: "Kid Shoes",
      image: kid_slider,
      description: "Comfort your kid's every step",
      bgColor:"bg-[#E6E6FA]",
      text:"text-purple-800",
      link:'/kids'
    },
    {
      id: 4,
      title: "Sport Shoes",
      image: sport_slider,
      description: "Be a Champion, Wear Champion Shoes",
      bgColor:"bg-[#D3D3D3]",
      text:"text-gray-800",
      link:'/sports'
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container ">
      <div className="overflow-hidden rounded-3xl h-screen sm:flex sm:items-center hero-bg-color">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data, index) => (
              <div key={index} className={`flex ${data.bgColor} py-32`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 px-2 md:w-[80%] md:mx-auto">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      className="text-2xl sm:text-6xl lg:text-2xl font-semibold"
                    >
                      {data.description}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      className={`text-5xl sm:text-6xl lg:text-8xl ${data.text} font-bold`}
                    >
                      {data.title}
                    </h1>

                    <div data-aos="fade-up">
                      <Link to={data.link}>
                      <Button title="Shop By Category" />
                      </Link>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div data-aos="slide-left" className="relative z-10">
                      <img
                        src={data.image}
                        alt={data.title}
                        className="w-[300px] h-[300px] md:ml-32 sm:h-[450px] sm:scale-105 lg:scale-110 xl:w-[450px] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40 transition-transform duration-1000 ease-in hover:duration-1000 hover:scale-125 hover:ease-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
