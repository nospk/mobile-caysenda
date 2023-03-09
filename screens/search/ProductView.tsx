import type { FC } from 'react';
import Image from 'next/image';
const ProductView: FC = () => {
	return (
		<>
			<div className="py-3 text-lg font-semibold">
				<span>Sản Phẩm Nổi Bật</span>
			</div>
			<div className="box-border flex flex-row gap-[1.1vw]">
				<div className="relative box-border h-[31vw] w-[31vw]">
					<Image
						src={`https://source.unsplash.com/random/300x300?sig=${
							Math.random() * 100
						}`}
						alt="Product Hot 1"
						sizes="31vw,31vw"
						fill
						style={{ objectFit: 'cover' }}
					/>
				</div>
				<div className="relative box-border h-[31vw] w-[31vw]">
					<Image
						src={`https://source.unsplash.com/random/300x300?sig=${
							Math.random() * 100
						}`}
						alt="Product Hot 1"
						sizes="31vw,31vw"
						fill
						style={{ objectFit: 'cover' }}
					/>
				</div>
				<div className="relative box-border h-[31vw] w-[31vw]">
					<Image
						src={`https://source.unsplash.com/random/300x300?sig=${
							Math.random() * 100
						}`}
						alt="Product Hot 1"
						sizes="31vw,31vw"
						fill
						style={{ objectFit: 'cover' }}
					/>
				</div>
			</div>
			<div className="py-3 text-lg font-semibold text-red-700">
				<span>Sản Phẩm Hot Của Trang</span>
			</div>
			<div className="flex flex-col gap-4 shadow-xl rounded-xl mb-3">
				<div className="p-2 flex flex-row">
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
