import type { NextPage } from "next";

import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";
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
  AiOutlineEye,
  AiOutlineMessage,
} from "react-icons/ai";
import { useRouter } from "next/router";
const ProductPage: NextPage = () => {
  const router = useRouter();
  const opticalVariants = {
    0: "bg-opacity-0",
    10: "bg-opacity-10",
    20: "bg-opacity-20",
    30: "bg-opacity-40",
    40: "bg-opacity-40",
    50: "bg-opacity-50",
    60: "bg-opacity-60",
    80: "bg-opacity-80",
    100: "bg-opacity-100",
  };
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [change, setChange] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<keyof typeof opticalVariants>(0);
  const handleNavigation = useCallback((e: Event, change: boolean) => {
    const window = e.currentTarget as Window;
    if (window.scrollY == 0 || !window.scrollY) {
      setOpacity(0);
      setChange(false);
    }
    if (window.scrollY > 200) {
      if (change == false) setChange(true);
    } else {
      if (change == true) setChange(false);
    }

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
    window.addEventListener("scroll", (event: Event) =>
      handleNavigation(event, change)
    );

    return () => {
      window.removeEventListener("scroll", (event: Event) =>
        handleNavigation(event, change)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleNavigation]);
  return (
    <>
      <div
        className={`flex sticky top-0 z-50 w-full h-[9vw] bg-[#f8f8f8] ${
          opticalVariants[opacity]
        } ${change ? " text-black" : "text-white"}`}
      >
        <div
          onClick={() => router.back()}
          className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw]  left-[2.4vw] rounded-full ${
            change ? "" : "bg-[rgba(0,0,0,0.3)]"
          }`}
        >
          <AiOutlineLeft className="w-[5vw] h-[5vw] " />
        </div>
        <div
          onClick={() => router.push("/search")}
          className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw]  right-[38.4vw] rounded-full ${
            change ? "" : "bg-[rgba(0,0,0,0.3)]"
          }`}
        >
          <AiOutlineSearch className="w-[5vw] h-[5vw] " />
        </div>
        <div
          onClick={() => router.push("/cart")}
          className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw] right-[26.4vw] rounded-full ${
            change ? "" : "bg-[rgba(0,0,0,0.3)]"
          }`}
        >
          <AiOutlineShoppingCart className="w-[5vw] h-[5vw] " />
        </div>
        <div
          className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw] right-[14.4vw] rounded-full ${
            change ? "" : "bg-[rgba(0,0,0,0.3)]"
          }`}
        >
          <AiOutlineShareAlt className="w-[5vw] h-[5vw] " />
        </div>
        <div
          onClick={() => router.push("/")}
          className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw] right-[2.4vw] rounded-full ${
            change ? "" : "bg-[rgba(0,0,0,0.3)]"
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
      <div className="py-[2.4vw] bg-white flex  w-full">
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
      <div className="px-[2.4vw] box-border w-full mt-[2.4vw] ">
        <div className="flex flex-row gap-2 bg-white box-border rounded-t-lg pt-[2.6667vw] px-[2.4vw] pb-[1.0667vw]">
          <div className="flex-1 flex-col w-[31.2vw] box-border ">
            <div className="flex flex-row text-[#FF4000] shrink-0 content-start items-end relative box-border font-medium">
              <span className="text-[6.4vw] content-start block box-border relative leading-[7.4667vw] shrink-0 ">
                25K
              </span>
              <span className="text-[3.2vw] leading-[5.3333vw] box-border block content-start shrink-0 relative ml-[0.5333vw]">
                đ
              </span>
            </div>
            <div className="flex flex-row shrink-0 box-border relative my-[0.8vw] ml-[0.8vw] content-start">
              <span className="text-[3.2vw] text-[#666666] block relative box-border leading-[3.7333vw] content-start">
                6 Cái
              </span>
            </div>
          </div>
          <div className="flex-1 flex-col w-[31.2vw] box-border ">
            <div className="flex flex-row text-[#FF4000] shrink-0 content-start items-end relative box-border font-medium">
              <span className="text-[6.4vw] content-start block box-border relative leading-[7.4667vw] shrink-0 ">
                22K
              </span>
              <span className="text-[3.2vw] leading-[5.3333vw] box-border block content-start shrink-0 relative ml-[0.5333vw]">
                đ
              </span>
            </div>
            <div className="flex flex-row shrink-0 box-border relative my-[0.8vw] ml-[0.8vw] content-start">
              <span className="text-[3.2vw] text-[#666666] block relative box-border leading-[3.7333vw] content-start">
                720-7199 Cái
              </span>
            </div>
          </div>
          <div className="flex-1 flex-col w-[31.2vw] box-border ">
            <div className="flex flex-row text-[#FF4000] shrink-0 content-start items-end relative box-border font-medium">
              <span className="text-[6.4vw] content-start block box-border relative leading-[7.4667vw] shrink-0 ">
                19K
              </span>
              <span className="text-[3.2vw] leading-[5.3333vw] box-border block content-start shrink-0 relative ml-[0.5333vw]">
                đ
              </span>
            </div>
            <div className="flex flex-row shrink-0 box-border relative my-[0.8vw] ml-[0.8vw] content-start">
              <span className="text-[3.2vw] text-[#666666] block relative box-border leading-[3.7333vw] content-start">
                ≥7200 Cái
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white box-border px-[2.4vw] rounded-b-lg pt-[1.333vw] pb-[2.6667vw]">
          <div className="flex flex-row justify-self-start content-start">
            <span className="text-[4vw] block relative font-bold content-start items-center shrink-0">
              ZCT-1
            </span>
          </div>
          <div className="flex flex-row justify-self-start box-border content-start mt-[0.8vw]">
            <div className="flex relative font-bold box-border content-start shrink-0">
              <ReactStars
                count={5}
                edit={false}
                value={4}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <div className="flex-1 box-border grow content-start shrink-0">
              <span className="text-[3.2vw] box-border text-[#999999] block relative text-right">
                Đã bán: 64 Cái
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[2.4vw] pt-[4.8vw] flex flex-col content-start shrink-0 w-full box-border">
        <div className="flex flex-row px-[2.4vw] py-[4.2667vw] bg-white rounded-lg box-border ">
          <div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
            <span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
              Giao Hàng
            </span>
          </div>
          <div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
            <div className="block flex-1 overflow-hidden">
              <span className="text-[3.4667vw] leading-[3.4667vw]">
                Thời gian 3 - 8 Ngày (Tùy Khu Vực)
              </span>
            </div>
          </div>
          <AiOutlineRight className="text-[#999999] w-[3vw] h-[4vw] ml-[1.3333vw] mt-[0.73333vw]" />
        </div>
      </div>
      <div className="px-[2.4vw] pt-[4.8vw] flex flex-col content-start shrink-0 w-full box-border">
        <div className="flex flex-row px-[2.4vw] pt-[2.4vw] pb-[1.8667vw] bg-white rounded-lg box-border ">
          <div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
            <span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
              SKU
            </span>
          </div>
          <div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
            <div className="block flex-1 overflow-hidden">
              <span className="text-[3.4667vw] leading-[3.4667vw]">ZTC-1</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-[2.4vw] py-[1.8667vw] bg-white rounded-lg box-border ">
          <div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
            <span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
              Danh Mục
            </span>
          </div>
          <div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
            <div className="block flex-1 overflow-hidden">
              <span className="text-[3.4667vw] leading-[3.4667vw]">
                Chậu gốm sứ chậu sứ
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-[2.4vw] py-[1.8667vw] bg-white rounded-lg box-border ">
          <div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
            <span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
              Tên Sản Phẩm
            </span>
          </div>
          <div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
            <div className="block flex-1 overflow-hidden">
              <span className="text-[3.4667vw] leading-[3.4667vw]">ZTC-1</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-[2.4vw] py-[1.8667vw] bg-white rounded-lg box-border ">
          <div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
            <span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
              Mã Sản Phẩm
            </span>
          </div>
          <div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
            <div className="block flex-1 overflow-hidden">
              <span className="text-[3.4667vw] leading-[3.4667vw]">ZTC-1</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-[2.4vw] py-[1.8667vw] bg-white rounded-lg box-border ">
          <div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
            <span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
              Sử dụng
            </span>
          </div>
          <div className="flex flex-row grow box-border shrink-0 items-center relative mt-[0.8vw]">
            <span className="text-[3.4667vw] leading-[4.4667vw] text-justify">
              Phụ kiện tiểu cảnh là một trong những mẫu phụ kiện terarium phổ
              biến, được sử dụng trong các mẫu tiểu cảnh chậu cây, chậu sen đá,
              chậu xương rồng, trang trí bàn làm việc, bánh sinh nhật, hoặc làm
              đồ chơi cho trẻ em. Ngọc Minh Shop - Nomi Chuyên Sỉ Phụ kiện tiểu
              cảnh, cam kết giá rẻ nhất, chất lượng. Bao kiểm hàng, Hư hỏng
              trong quá trình vận chuyển đền bù 100%. Cam Kết Uy Tín Chất Lượng.
              Nomi xin hân hạnh được phục vụ Quý Khách.
            </span>
          </div>
        </div>
        <div className="flex flex-row px-[2.4vw] pb-[2.4vw] pt-[1.8667vw] bg-white rounded-lg box-border ">
          <div className="flex flex-row height-[5.3333vw] mr-[5.3333vw] items-center box-broder relative content-start">
            <span className="text-[3.4667vw] text-[#999999] shrink-0 relative box-border block">
              Tải ảnh
            </span>
          </div>
          <div className="flex flex-row grow box-border shrink-0 items-center relative pl-[1.0667vw] pr-[1.3333vw]">
            <div className="block flex-1 overflow-hidden">
              <span className="text-[3.4667vw] leading-[3.4667vw] text-[#023cf8] ">
                Nhấn để tải
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-[2.4vw] w-full flex flex-col content-start relative box-border shrink-0 mt-[4.8vw]">
        <div className="box-border items-center shrink-0 flex flex-col w-[96vw] h-[12vw] relative border-b-[1px]">
          <span className="text-[#FF6000] leading-[12vw] text-[4.2667vw] shrink-0 block relative whitespace-pre-wrap">
            Chi Tiết Sản Phẩm
          </span>
          <div className="bg-[#FF6000] box-border flex shrink-0 absolute h-[2px] bottom-0 left-0 right-0 w-[40vw] mx-auto"></div>
        </div>
        <div className="w-[96vw] relative h-[12vw]"></div>
        <div className="w-[96vw] relative">
          <Image
            src="https://caysenda.vn/resources/upload/18256595267_102253868.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="https://caysenda.vn/resources/upload/18182785960_102253868.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="https://caysenda.vn/resources/upload/17820403218_102253868.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="https://caysenda.vn/resources/upload/17893001024_102253868.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="https://caysenda.vn/resources/upload/17820406253_102253868.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex flex-row bottom-0 fixed z-50 bg-white box-border pt-[2vw] pb-[1.3333vw] px-[3.2vw] w-full shadow-md border-t-[0.13333vw] h-[9.86667vw]">
        <div className="flex flex-row w-1/2 shrink-0 justify-center items-center content-center">
          <div className="flex flex-col box-border shrink-0 px-[2vw] relative justify-center items-center content-center h-[8.66667vw] ">
            <AiOutlineEye className="text-[5vw]" />
            <span className="text-[#999999] text-[2.8vw]">Xem Nhiều Hơn </span>
          </div>
          <div className="flex flex-col box-border shrink-0 px-[2vw] relative justify-center items-center content-center h-[8.66667vw]">
            <AiOutlineMessage className="text-[5vw]" />
            <span className="text-[#999999] text-[2.8vw]">Nhắn Tin</span>
          </div>
        </div>

        <div className="flex grow justify-end w-1/2 shrink-0">
          <button className="text-[3.4667vw] relative bg-[#FEA200] px-[3.4667vw] justify-center items-center font-bold rounded-full text-white">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
