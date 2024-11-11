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
      bgColor: "bg-[#4682B4]",
      text: "text-blue-800",
      link: "/men",
    },
    {
      id: 2,
      title: "Women Shoes",
      image: women_slider,
      description: "Strengthen your journey with us",
      bgColor: "bg-[#FFC0CB]",
      text: "text-red-800",
      link: "/women",
    },
    {
      id: 3,
      title: "Kid Shoes",
      image: kid_slider,
      description: "Comfort your kid's every step",
      bgColor: "bg-[#E6E6FA]",
      text: "text-purple-800",
      link: "/kids",
    },
    {
      id: 4,
      title: "Sport Shoes",
      image: sport_slider,
      description: "Be a Champion, Wear Champion Shoes",
      bgColor: "bg-[#D3D3D3]",
      text: "text-gray-800",
      link: "/sports",
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
    <div className="relative w-full">
      <Slider {...settings}>
        {HeroData.map((data, index) => (
          <div
            key={index}
            className={`flex items-center ${data.bgColor} py-16 sm:py-24`}
          >
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-row items-center space-y-8 md:space-y-0 w-full mx-auto">
                {/* Text and Buttons Section */}
                <div
                  className={`flex flex-col items-start text-center md:text-left space-y-4 ml-12`}
                >
                  <h1
                    data-aos="zoom-out"
                    className="text-xl sm:text-3xl lg:text-4xl font-semibold text-white"
                  >
                    {data.description}
                  </h1>
                  <h2
                    data-aos="zoom-out"
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${data.text}`}
                  >
                    {data.title}
                  </h2>
                  <div data-aos="fade-up">
                    <Link to={data.link}>
                      <Button title="Shop By Category" />
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative flex mx-auto items-center">
                  <div
                    data-aos="fade-left"
                    className="transition-transform duration-500 ease-in-out"
                  >
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-[60%] object-contain mx-auto drop-shadow-lg transform hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
