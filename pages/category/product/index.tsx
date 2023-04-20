import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/thumbs';
import './styles.module.css';
import SwiperCore, { Thumbs, Pagination } from 'swiper';
import Image from 'next/image';
import { useState } from 'react';

const ProductPage: NextPage = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
	return (
		<>
			<Swiper
				className="w-[100vw] h-[100vw]"
				spaceBetween={10}
				slidesPerView={1}
				grabCursor={true}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				pagination={{
					type: 'fraction',
				}}
				modules={[Pagination, Thumbs]}
			>
				<SwiperSlide>
					<Image
						src="https://caysenda.vn/resources/upload/17892854272_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
				<SwiperSlide className="relative">
					<Image
						src="https://caysenda.vn/resources/upload/17892863213_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
						alt=""
						sizes="100vw"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</SwiperSlide>
			</Swiper>
			<div className="p-2 bg-white">
				<Swiper
					className="w-full bg-white"
					loop={false}
					spaceBetween={5}
					slidesPerView={5}
					watchSlidesProgress
					touchRatio={2}
					slideToClickedSlide={true}
					onSwiper={setThumbsSwiper}
					modules={[Thumbs]}
				>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892854272_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892863213_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://caysenda.vn/resources/upload/17892872215_102253868.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</SwiperSlide>
				</Swiper>
			</div>

			<Footer />
		</>
	);
};
export default ProductPage;
