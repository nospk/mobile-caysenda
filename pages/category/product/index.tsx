import type { NextPage } from "next";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/thumbs";

import SwiperCore, { Thumbs, Pagination } from "swiper";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineShareAlt,
  AiOutlineHome,
} from "react-icons/ai";
import { useRouter } from "next/router";
const ProductPage: NextPage = () => {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [change, setChange] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);
  const handleNavigation = useCallback((e: any) => {
    const window = e.currentTarget;
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      setOpacity(0);
      setChange(false);
    }
    if (window.scrollY > 100) setChange(true);

    if (window.scrollY > 50) setOpacity(10);
    if (window.scrollY > 100) setOpacity(20);
    if (window.scrollY > 150) setOpacity(30);
    if (window.scrollY > 200) setOpacity(40);
    if (window.scrollY > 250) setOpacity(50);
    if (window.scrollY > 300) setOpacity(60);
    if (window.scrollY > 400) setOpacity(80);
    if (window.scrollY > 500) setOpacity(100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <>
      <div
        className={`flex sticky top-0 z-50 w-full bg-[#f8f8f8] bg-opacity-${opacity} ${
          change ? "h-[9vw] text-black" : "h-[12vw] text-white"
        }`}
      >
        <div
          onClick={() => router.back()}
          className={`absolute flex flex-col shrink-0 justify-center items-center   left-[2.4vw] rounded-full ${
            change
              ? "top-[0.5vw] w-[8vw] h-[8vw]"
              : "top-[1.2vw] w-[9.6vw] h-[9.6vw] bg-[rgba(0,0,0,0.3)]"
          }`}
        >
          <AiOutlineLeft className="w-[5vw] h-[5vw] " />
        </div>
        <div
          onClick={() => router.push("/search")}
          className={`absolute flex flex-col shrink-0 justify-center items-center  top-[1.2vw] right-[38.4vw] rounded-full ${
            change
              ? "top-[0.5vw] w-[8vw] h-[8vw]"
              : "top-[1.2vw] w-[9.6vw] h-[9.6vw] bg-[rgba(0,0,0,0.3)]"
          }`}
        >
          <AiOutlineSearch className="w-[5vw] h-[5vw] " />
        </div>
        <div
          onClick={() => router.push("/cart")}
          className={`absolute flex flex-col shrink-0 justify-center items-center  top-[1.2vw] right-[26.4vw] rounded-full ${
            change
              ? "top-[0.5vw] w-[8vw] h-[8vw]"
              : "top-[1.2vw] w-[9.6vw] h-[9.6vw] bg-[rgba(0,0,0,0.3)]"
          }`}
        >
          <AiOutlineShoppingCart className="w-[5vw] h-[5vw] " />
        </div>
        <div
          className={`absolute flex flex-col shrink-0 justify-center items-center  top-[1.2vw] right-[14.4vw] rounded-full ${
            change
              ? "top-[0.5vw] w-[8vw] h-[8vw]"
              : "top-[1.2vw] w-[9.6vw] h-[9.6vw] bg-[rgba(0,0,0,0.3)]"
          }`}
        >
          <AiOutlineShareAlt className="w-[5vw] h-[5vw] " />
        </div>
        <div
          onClick={() => router.push("/")}
          className={`absolute flex flex-col shrink-0 justify-center items-center  top-[1.2vw] right-[2.4vw] rounded-full ${
            change
              ? "top-[0.5vw] w-[8vw] h-[8vw]"
              : "top-[1.2vw] w-[9.6vw] h-[9.6vw] bg-[rgba(0,0,0,0.3)]"
          }`}
        >
          <AiOutlineHome className="w-[5vw] h-[5vw] " />
        </div>
      </div>

      <Swiper
        className="block w-[100vw] h-[100vw] rounded-xl mt-[-12vw]"
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Thumbs]}
      >
        <SwiperSlide>
          <Image
            src="https://caysenda.vn/resources/upload/17892854272_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            src="https://caysenda.vn/resources/upload/17892863213_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
      </Swiper>
      <div className="py-[2.4vw] bg-white flex">
        <Swiper
          className="flex-1 w-full bg-white"
          loop={false}
          spaceBetween={2}
          slidesPerView={7}
          watchSlidesProgress
          touchRatio={2}
          slideToClickedSlide={true}
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
        >
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892854272_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892863213_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl w-[11.7333vw] h-[11.7333vw]"
              src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
              alt=""
              width={500}
              height={500}
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex bg-white flex-row justify-center items-center w-[9.33333vw] h-[11.73333vw] mt-[-0.4vw] top-[2.66667vw] left-[90.66667vw] z-10">
          <AiOutlineRight className="text-[4.2667vw] text-[#999999]" />
        </div>
      </div>
      <div>
        a <br></br>a <br></br>a <br></br>a <br></br>a <br></br>a <br></br>a
        <br></br>a <br></br>a <br></br>a <br></br>a <br></br>a <br></br>a{" "}
        <br></br>a <br></br>a <br></br>a<br></br>a <br></br>a <br></br>a{" "}
        <br></br>a <br></br>a <br></br>a <br></br>a <br></br>a <br></br>a
        <br></br>a <br></br>a <br></br>a <br></br>a <br></br>a <br></br>a{" "}
        <br></br>a <br></br>a <br></br>a<br></br>a <br></br>a <br></br>
      </div>
    </>
  );
};
export default ProductPage;
