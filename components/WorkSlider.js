// Work Slider Data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Web Sewa Kos Kosan Kosmosijaga",
          path: "/thumb1.jpg",
        },
        {
          title: "Web Asset Management PT. Banten Realti Indonesia",
          path: "/thumb2.jpg",
        },
        {
          title: "Website Absensi Webcam with Radius Maps",
          path: "/thumb3.jpg",
        },
        {
          title:
            "Smarthome Lampu Node MCU React Native for Android Course Santri Koding",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "Web Kasir POS Course Santri Koding",
          path: "/thumb5.jpg",
        },
        {
          title:
            "Web Penjualan dan pengelolan Stok Sparepart Kendaraan PT Nusantara Enggal Optimal",
          path: "/thumb6.jpg",
        },
        {
          title: "Web Company Profile Architecture Kaminata",
          path: "/thumb7.jpg",
        },
        {
          title: "Web Portofolio Angga Saputra",
          path: "/thumb8.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "Web E-Commerce Store",
          path: "/thumb9.jpg",
        },
        {
          title: "Web Profile Company",
          path: "/thumb10.jpg",
        },
        {
          title: "Web POS Kasir",
          path: "/thumb11.jpg",
        },
        {
          title: "Web Portofolio Faisal",
          path: "/thumb12.jpg",
        },
      ],
    },   {
      images: [
        {
          title: "Web Company Profile",
          path: "/thumb13.jpg",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div
                className="relative rounded-lg overflow-hidden flex
                  items-center justify-center group"
                key={imageIndex}
              >
                <div
                  className="flex items-center justify-center relative
                    overflow-hidden group"
                >
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt="" />
                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l
                      from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                      group-hover:opacity-80 transition-all duration-700"
                  ></div>
                  {/* title */}
                  <div
                    className="absolute bottom-0 translate-y-full
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300"
                  >
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* title part 2*/}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                          tranlate-all duration-300 delay-150"
                      >
                        {image.title}
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl translate-y-[500%]
                          group-hover:translate-y-0 transition-all duration-300
                          delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
