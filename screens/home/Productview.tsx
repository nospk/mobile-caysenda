import type { FC } from 'react';
import FlexLeftRightLayout from '@/layouts/FlexLeftRightLayout';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchCardCol from '@/components/SearchCard';
import SliderCard from '@/components/SliderCard';
interface typeBanner {
	src: string;
	alt: string;
	link: string;
}
[];
interface typeProduct {
	key: string;
	name: string;
	price: number;
	sold: number;
	image: string;
}
const ProductView: FC<{ slideBanners: any; productsLefts: any; productsRights: any }> = ({
	slideBanners,
	productsLefts,
	productsRights,
}) => {
	const listslideBanner = slideBanners.map((slideBanner: any) => {
		return {
			src: slideBanner,
			alt: 'banner',
			link: '/product',
		};
	});
	const listLeft = productsLefts.map((productsLeft: any) => (
		<ProductCard
			key={productsLeft}
			name="Kẹo dẻo"
			price={100000}
			sold={300}
			image={`https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`}
		/>
	));
	const listRight = productsRights.map((productsRight: any) => (
		<ProductCard
			key={productsRight}
			name="Kẹo dẻo"
			price={100000}
			sold={300}
			image={`https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`}
		/>
	));
	listLeft.unshift(<SliderCard key={30} banner={listslideBanner} />);
	// prettier-ignore
	listRight.splice(3, 0,<SearchCardCol key={31} keywords={["Quần Áo", "Đồ trẻ em", "Túi xách", "Quần jean", "Áo Thun", "Túi xách hình con thỏ", "Tai nghe bluetooth", "Điện thoại Iphone"]}/>)

	return (
		<>
			<FlexLeftRightLayout>
				<div className="flex-1">{listLeft}</div>
				<div className="flex-1">{listRight}</div>
			</FlexLeftRightLayout>
		</>
	);
};
export default ProductView;
