import type { FC } from 'react';
import Image from 'next/image';
import OfferBar from '@/components/OfferBar';
const ProductView: FC = () => {
	const offers = [
		{
			src: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			alt: 'Product Hot 1',
			productName: 'Quần Áo 1',
			url: '/product/quanao1',
		},
		{
			src: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			alt: 'Product Hot 2',
			productName: 'Quần Áo 2',
			url: '/product/quanao2',
		},
		{
			src: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			alt: 'Product Hot 3',
			productName: 'Quần Áo 3',
			url: '/product/quanao3',
		},
	];
	const listProducts = [
		{
			name: 'Quần dài 1',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/1',
			index: '1'
		},
		{
			name: 'Quần dài 2',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/2',
			index: '2'
		},
		{
			name: 'Quần dài 3',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/3',
			index: '3'
		},
		{
			name: 'Quần dài 4',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/4',
			index: '4'
		},
		{
			name: 'Quần dài 5',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/5',
			index: '5'
		},
		{
			name: 'Quần dài 6',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/6',
			index: '6'
		},
		{
			name: 'Quần dài 7',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/7',
			index: '7'
		},
		{
			name: 'Quần dài 8',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/8',
			index: '8'
		},
		{
			name: 'Quần dài 9',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/9',
			index: '9'
		},
		{
			name: 'Quần dài 10',
			sold: '123123',
			image: `https://source.unsplash.com/random/300x300?sig=${Math.random() * 100}`,
			link: '/product/10',
			index: '10'
		},
	];
	return (
		<>
			<div className="py-3 text-lg font-semibold">
				<span>Sản Phẩm Nổi Bật</span>
			</div>
			<OfferBar offers={offers} />
			<div className="py-3 text-lg font-semibold text-red-700">
				<span>Sản Phẩm Hot Của Trang</span>
			</div>
			<div className="flex flex-col gap-4 shadow-xl rounded-xl mb-3 p-2">
				<div className="flex flex-row">
					<span className="absolute z-10 text-white bg-red-500 p-1 rounded-full">1</span>
					<div className="relative h-[15vw] w-[15vw]">
						<Image
							className="rounded-lg"
							src={`https://source.unsplash.com/random/300x300?sig=${
								Math.random() * 100
							}`}
							alt="Product Hot 1"
							sizes="31vw,31vw"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="grow p-2 space-y-1.5">
						<p> Quần Áo Thời Trang</p>
						<p className="text-gray-400"> 312321312</p>
					</div>
				</div>
				<div className="p-2 flex flex-row">
					<span className="absolute z-10 text-white bg-orange-400 p-1 rounded-full">
						2
					</span>
					<div className="relative h-[15vw] w-[15vw]">
						<Image
							className="rounded-lg"
							src={`https://source.unsplash.com/random/300x300?sig=${
								Math.random() * 100
							}`}
							alt="Product Hot 1"
							sizes="31vw,31vw"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="grow p-2 space-y-1.5">
						<p> Quần Áo Thời Trang</p>
						<p className="text-gray-400"> 312321312</p>
					</div>
				</div>
				<div className="p-2 flex flex-row">
					<span className="absolute z-10 text-white bg-yellow-400 p-1 rounded-full">
						3
					</span>
					<div className="relative h-[15vw] w-[15vw]">
						<Image
							className="rounded-lg"
							src={`https://source.unsplash.com/random/300x300?sig=${
								Math.random() * 100
							}`}
							alt="Product Hot 1"
							sizes="31vw,31vw"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="grow p-2 space-y-1.5">
						<p> Quần Áo Thời Trang</p>
						<p className="text-gray-400"> 312321312</p>
					</div>
				</div>
				<div className="p-2 flex flex-row">
					<span className="absolute z-10 text-white bg-gray-300 p-1 rounded-full">4</span>
					<div className="relative h-[15vw] w-[15vw]">
						<Image
							className="rounded-lg"
							src={`https://source.unsplash.com/random/300x300?sig=${
								Math.random() * 100
							}`}
							alt="Product Hot 1"
							sizes="31vw,31vw"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="grow p-2 space-y-1.5">
						<p> Quần Áo Thời Trang</p>
						<p className="text-gray-400"> 312321312</p>
					</div>
				</div>
				<div className="p-2 flex flex-row">
					<span className="absolute z-10 text-white bg-gray-300 p-1 rounded-full">5</span>
					<div className="relative h-[15vw] w-[15vw]">
						<Image
							className="rounded-lg"
							src={`https://source.unsplash.com/random/300x300?sig=${
								Math.random() * 100
							}`}
							alt="Product Hot 1"
							sizes="31vw,31vw"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="grow p-2 space-y-1.5">
						<p> Quần Áo Thời Trang</p>
						<p className="text-gray-400"> 312321312</p>
					</div>
				</div>
				<div className="p-2 flex flex-row">
					<span className="absolute z-10 text-white bg-gray-300 p-1 rounded-full">6</span>
					<div className="relative h-[15vw] w-[15vw]">
						<Image
							className="rounded-lg"
							src={`https://source.unsplash.com/random/300x300?sig=${
								Math.random() * 100
							}`}
							alt="Product Hot 1"
							sizes="31vw,31vw"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="grow p-2 space-y-1.5">
						<p> Quần Áo Thời Trang</p>
						<p className="text-gray-400"> 312321312</p>
					</div>
				</div>
				<div className="p-2 flex flex-row">
					<span className="absolute z-10 text-white bg-gray-300 p-1 rounded-full">7</span>
					<div className="relative h-[15vw] w-[15vw]">
						<Image
							className="rounded-lg"
							src={`https://source.unsplash.com/random/300x300?sig=${
								Math.random() * 100
							}`}
							alt="Product Hot 1"
							sizes="31vw,31vw"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="grow p-2 space-y-1.5">
						<p> Quần Áo Thời Trang</p>
						<p className="text-gray-400"> 312321312</p>
					</div>
				</div>
				<div className="p-2 flex flex-row">
					<span className="absolute z-10 text-white bg-gray-300 p-1 rounded-full">8</span>
					<div className="relative h-[15vw] w-[15vw]">
						<Image
							className="rounded-lg"
							src={`https://source.unsplash.com/random/300x300?sig=${
								Math.random() * 100
							}`}
							alt="Product Hot 1"
							sizes="31vw,31vw"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="grow p-2 space-y-1.5">
						<p> Quần Áo Thời Trang</p>
						<p className="text-gray-400"> 312321312</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProductView;
