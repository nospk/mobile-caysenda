import type { NextPage } from "next";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/thumbs";

import SwiperCore, { Thumbs, Pagination } from "swiper";
import Image from "next/image";
import { useState } from "react";
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
  return (
    <>
      <div>
        <div
          onClick={() => router.back()}
          className="absolute flex flex-col shrink-0 justify-center items-center z-10 w-[9.6vw] h-[9.6vw] top-[2.4vw] left-[2.4vw] bg-[rgba(0,0,0,0.3)] rounded-full text-white"
        >
          <AiOutlineLeft className="w-[5.33333vw] h-[5.33333vw] " />
        </div>
        <div
          onClick={() => router.push("/search")}
          className="absolute flex flex-col shrink-0 justify-center items-center z-10 w-[9.6vw] h-[9.6vw] top-[2.4vw] right-[38.4vw] bg-[rgba(0,0,0,0.3)] rounded-full text-white"
        >
          <AiOutlineSearch className="w-[5.33333vw] h-[5.33333vw] " />
        </div>
        <div
          onClick={() => router.push("/cart")}
          className="absolute flex flex-col shrink-0 justify-center items-center z-10 w-[9.6vw] h-[9.6vw] top-[2.4vw] right-[26.4vw] bg-[rgba(0,0,0,0.3)] rounded-full text-white"
        >
          <AiOutlineShoppingCart className="w-[5.33333vw] h-[5.33333vw] " />
        </div>
        <div className="absolute flex flex-col shrink-0 justify-center items-center z-10 w-[9.6vw] h-[9.6vw] top-[2.4vw] right-[14.4vw] bg-[rgba(0,0,0,0.3)] rounded-full text-white">
          <AiOutlineShareAlt className="w-[5.33333vw] h-[5.33333vw] " />
        </div>
        <div
          onClick={() => router.push("/")}
          className="absolute flex flex-col shrink-0 justify-center items-center z-10 w-[9.6vw] h-[9.6vw] top-[2.4vw] right-[2.4vw] bg-[rgba(0,0,0,0.3)] rounded-full text-white"
        >
          <AiOutlineHome className="w-[5.33333vw] h-[5.33333vw] " />
        </div>
        <Swiper
          className="w-[100vw] h-[100vw] rounded-xl"
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
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
      </div>
    </>
  );
};
export default ProductPage;
